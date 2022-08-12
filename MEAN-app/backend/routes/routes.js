const express = require("express");
const router = express.Router();
const ObjectId = require("mongoose").Types.ObjectId;
const Employee = require("../models/employee.js");
const verify = require("../routes/verifyToken");
//const dateForm = require("date-and-time");

//GET FOR single employee
router.get("/:id", (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    Employee.findById(req.params.id, (err, doc) => {
      if (err) {
        console.log("Error in GET Employee by ID " + err);
      } else {
        res.send(doc);
      }
    });
  } else {
    return res.status(400).send(` No record found with ${req.params.id}`);
  }
});

//GET API
router.get("/", (req, res) => {
  Employee.find((err, doc) => {
    if (err) {
      console.log("Error in GET data" + err);
    } else {
      res.send(doc);
    }
  });
});

//POST API
router.post("/", (req, res) => {
  // //const newDate = new Date(req.body.dueDate);
  // var value = dateForm.format(new Date(req.body.dueDate), "DD-MM-YYYY");
  // console.log(value);

  let emp = new Employee({
    name: req.body.name,
    position: req.body.position,
    dept: req.body.dept,
    task: req.body.task,
    dueDate: req.body.dueDate,
    taskCompletionStatus: req.body.taskCompletionStatus,
  });

  emp.save((err, doc) => {
    if (err) {
      console.log("Error in Post data" + err);
    } else {
      res.send(doc);
    }
  });
});

//PUT API FOR single employee (It will perform update)
router.put("/:id", (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    let emp = {
      name: req.body.name,
      position: req.body.position,
      dept: req.body.dept,
      task: req.body.task,
      dueDate: req.body.dueDate,
      taskCompletionStatus: req.body.taskCompletionStatus,
    };
    Employee.findByIdAndUpdate(
      req.params.id,
      { $set: emp },
      { new: true },
      (err, doc) => {
        if (err) {
          console.log("Error in Update Employee by ID " + err);
        } else {
          res.send(doc);
        }
      }
    );
  } else {
    return res.status(400).send(` No record found with ${req.params.id}`);
  }
});

//DELETE FOR single employee
router.delete("/:id", (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    Employee.findByIdAndRemove(req.params.id, (err, doc) => {
      if (err) {
        console.log("Error in DELETE Employee by ID " + err);
      } else {
        res.send(doc);
      }
    });
  } else {
    return res.status(400).send(` No record found with ${req.params.id}`);
  }
});

module.exports = router;
