const mongoose = require("mongoose");
//const date1 = new Date("<YYYY-mm-dd>");
const Employee = mongoose.model("Employee", {
  name: { type: String },
  position: { type: String },
  dept: { type: String },
  task: { type: String, default: "task not added" },
  dueDate: { type: Date },
  taskCompletionStatus: { type: String, default: "pending" },
});

module.exports = Employee;
