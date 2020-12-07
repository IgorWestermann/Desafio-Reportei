// const express = require("express");
const { Router } = require("express");
// const app = require("../index");
const routes = Router();
const mongoose = require("mongoose");

require("./models/Profile");

const Profile = mongoose.model("profile");

routes.get("/profile", (request, response) => {
  Profile.find({})
    .then((profile) => {
      return response.json(profile);
    })
    .catch((erro) => {
      return response.status(400).json({
        error: true,
        message: "Nenhum profile foi encontrado =(",
      });
    });
});

routes.get("/profile/:id", async (request, response) => {
  const profile = await Profile.findOne({ _id: request.params.id });

  if (!profile) {
    // chamar api do insta pra pegar as infos e salvar no banco

    return response.status(400).json({
      error: true,
      message: "Não foi encontrado nenhum profile...",
    });
  }

  return response.json(profile);
});

routes.post("/profile", (request, response) => {
  const profile = Profile.create(request.body, (err) => {
    if (err)
      return response.status(400).json({
        error: true,
        message: "Error: Profile não foi cadastrado...",
      });
    return response.status(200).json({
      error: false,
      message: "Profile registrado com SUCESSO",
    });
  });
});

routes.put("/profile/:id", (request, response) => {
  const profile = Profile.updateOne(
    { _id: request.params.id },
    request.body,
    (err) => {
      if (err)
        return response.status(400).json({
          error: true,
          message: "Não foi possivel editar...",
        });
      return response.json({
        error: false,
        message: "Editado com sucesso",
      });
    }
  );
});

routes.delete("/profile/:id", (request, response) => {
  const profile = Profile.deleteOne({ _id: request.params.id }, (err) => {
    if (err)
      return response.status(400).json({
        error: true,
        message: "Não foi possivel deletar...",
      });
    return response.json({
      error: false,
      message: "Deletado com sucesso! =)",
    });
  });
});

module.exports = routes;
