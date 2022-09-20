const mongoose = require("mongoose");
const app = require("./app");
const { DB_HOST } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => app.listen(8081, () => console.log("success")))
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
