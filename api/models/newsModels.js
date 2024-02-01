const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    published_at: {
      type: Date,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publisher: {
      type: String,
      required: true,
    },
    short_description: {
      type: String,
      required: true,
    },
    keywords: {
      type: [String],
      required: true,
    },
    header_image: {
      type: String,
      required: true,
    },
    raw_description: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    scraped_at: {
      type: Date,
      required: true,
    },
  },
  { collection: "berita" }
);

const News = mongoose.model("news", newsSchema);

module.exports = News;