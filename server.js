const app = require("./app");
const port = require("./config").port;

app.listen(port, () => {
  console.log("server started at port ", port);
});
