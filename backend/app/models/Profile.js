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

    // instagram
    // graphql: {
    //   user: {
    //     biography: string, //biografia
    //     external_url: string, //link externo
    //     edge_followed_by: { //seguidores
    //       count: number
    //     },
    //     edge_follow: { //Seguindo
    //       count: number
    //     },
    //     full_name: string, //nome completo
    //     id: string, //id
    //     business_category_name: string, //tipo de conta
    //     is_private: boolean, //conta privada?
    //     is_verified: boolean, //conta verificada?
    //     edge_mutual_followed_by: { //seguidores em comum
    //       count: number,
    //     },
    //     profile_pic_url: string, //foto de perfil
    //     username: string, //nome do usuario
    //     edge_owner_to_timeline_media: { //publicações
    //       count: number,
    //     },
    //   },
    // },
  },
  {
    timestamps: true,
  }
);

mongoose.model("profile", Profile);
