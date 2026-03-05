const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  company: { type: String, required: true },
  position: { type: String, required: true },
  appDate: { type: String, required: true },
  status: { type: String, required: true },
  notes: { type: String }
});

module.exports = mongoose.model("Application", applicationSchema);
