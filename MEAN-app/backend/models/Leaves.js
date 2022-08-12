const mongoose = require("mongoose");

const leavesSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  leaveType: { type: String },
  reason: { type: String },
  fromdate: { type: Date },
  todate: { type: Date },
  approve: { type: Boolean },
});

module.exports = mongoose.model("leaves", leavesSchema);
