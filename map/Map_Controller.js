const express = require("express");
const bodyParser = require("body-parser");

const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

const Map = require("./Map_Schema");

// this methode/function is for creating a Map coordinate
router.post("/create_map", (req, res) => {
  Map.create(
    {
      name: req.body.name,
      longitude: req.body.longitude,
      latitude: req.body.latitude
    },
    (error, result) => {
      // if an error was encountered this runs
      if (error)
        return res
          .status(500)
          .send("There was a problem adding the information to the database.");

      //if the record was created successfully this code runs
      res
        .status(200)
        .send({ message: "record created successfully", data: result });
      console.log(req.query.latitude);
    }
  );
});

// this methode/function is for getting all the Map co-ordinates
router.get("/", (req, res) => {
  var score = [];
  Map.find({ name: new RegExp(req.query.q, "gi") }, (error, result) => {
    if (error) {
      res.status(500).send(error);
    } else {
      
      for (var i = 0; i < result.length; i++) {
        let latitude = result[i].latitude;
        let longitude = result[i].longitude;

        let longvalue1 =
          parseFloat(req.query.longitude) / parseFloat(longitude);
        let lativalue2 = parseFloat(req.query.latitude) / parseFloat(latitude);
        let total = Math.abs(longvalue1) + Math.abs(lativalue2);
        score = total / 2;
        console.log(score);

        var coodinate = result.map(item => ({
          name: item.name,
          longitude: item.longitude,
          latitude: item.latitude,
          score: score
        }));
      } 

      res.status(200).send({ suggestion: coodinate });
    }
  });
});

//exporting router
module.exports = router;
