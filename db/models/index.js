let mongoose = require("mongoose");

let ProjectSchema = require("./Project");

module.exports = {
  Project: mongoose.models.projects || mongoose.model("projects", ProjectSchema),
};