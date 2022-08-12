const express = require("express");
//const bodyParser = require('body-parser');
const cors = require("cors");
const mongoose = require("./db.js");

//import routes
const routes = require("./routes/routes.js");
const userRoutes = require("./routes/user");
const leavesRoutes = require("./routes/leaves");

const app = express();
//app.use(bodyParser.json());
app.use(express.json());
app.use(cors({ origin: "http://localhost:4200" }));

app.listen(3000, () => console.log("Server started at port : 3000"));

app.use("/employees", routes);
app.use("/user", userRoutes);
app.use("/leaves", leavesRoutes);
