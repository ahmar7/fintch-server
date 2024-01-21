const mongoose = require("mongoose");

const FilesModel = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  public_id: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

let htmlModel = mongoose.model("file", FilesModel);

module.exports = htmlModel;
