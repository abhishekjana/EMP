const express = require("express");
const router = express.Router();
//const ObjectId = require("mongoose").Types.ObjectId;
const Leaves = require("../models/Leaves.js");

//POST API
router.post("/", (req, res) => {
  let leave = new Leaves({
    name: req.body.name,
    email: req.body.email,
    leaveType: req.body.leaveType,
    reason: req.body.reason,
    fromdate: req.body.fromdate,
    todate: req.body.todate,
    approve: false,
  });
  leave.save((err, doc) => {
    if (err) {
      console.log("Error in Post data" + err);
    } else {
      res.send(doc);
    }
  });
});

module.exports = router;
