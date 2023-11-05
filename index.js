const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const port = 8000;
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/public", express.static(__dirname + "/public"));

const projectsRoute = require("./app/routes/projects");
app.use("/projects", projectsRoute);

const automationhubspotRoute = require("./app/routes/automationhubspot");
app.use("/automationhubspot", automationhubspotRoute);

const automationzapierRoute = require("./app/routes/automationzapier");
app.use("/automationzapier", automationzapierRoute);

const seoRoute = require("./app/routes/seo");
app.use("/seo", seoRoute);

const technologiesRoute = require("./app/routes/technologies");
app.use("/technologies", technologiesRoute);

const servicesRoute = require("./app/routes/services");
app.use("/services", servicesRoute);

const backendRoute = require("./app/routes/backend");
app.use("/backend", backendRoute);

app.post('/submit', (req, res) => {
  const { name, email, phone } = req.body;
  res.json({ success: true, message: 'Dados recebidos com sucesso!', name, email, phone });
});

const hotsiteRoute = require("./app/routes/hotsite");
app.use("/hotsite", hotsiteRoute);

app.listen(port, () => {
  console.log(`API está rodando em http://localhost:${port}`);
});
