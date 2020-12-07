const { request, response } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const routes = require("./routes");

const cors = require("cors");
const api = require("./services/api");

const Profile = mongoose.model("profile");

const getUser = async () => {
  try {
    const response = await api.get("/westermann.i/?__a=1");
    // console.log("response.data");
  } catch (error) {
    console.error(error);
  }
};

getUser();

require("./models/Profile");

app.use((request, response, next) => {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  response.header("Access-Control-Allow-Headers", "*");
  app.use(cors());
  next();
});
app.use(express.json());
app.use(routes);

mongoose
  .connect("mongodb://localhost/reportei", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Conexão realizada");
  })
  .catch((erro) => {
    console.log("Erro: Não foi possivel conetar com o MongoDB");
  });

app.listen(3333, () => {
  console.log("Server started on 3333 port");
});

// export default app;
