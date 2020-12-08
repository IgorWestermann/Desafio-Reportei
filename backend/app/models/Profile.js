const mongoose = require("mongoose");

const Profile = new mongoose.Schema(
  {
    name: { type: String },
    full_name: { type: String },
    description: { type: String },
    owner: {
      login: { type: String },
      avatar_url: { type: String },
      html_url: { type: String },
    },
    html_url: { type: String },
    created_at: { type: String },
    clone_url: { type: String },
    stargazers_count: { type: Number },
    language: { type: String },
    forks: { type: Number },
    watchers_count: { type: Number },
  },
  {
    timestamps: true,
  }
);

mongoose.model("profile", Profile);
