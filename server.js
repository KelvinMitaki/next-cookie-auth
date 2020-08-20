const next = require("next");
const express = require("express");

const dev = process.env.NODE_ENV !== "production";
const PORT = process.env.PORT || 3000;
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.use(express.json());
  server.post("/user/login", (req, res) => {
    res.send({ ...req.body, success: true });
  });
  server.get("*", (req, res) => handle(req, res));
  server.listen(PORT, err =>
    err ? console.log({ err }) : console.log(`server started on port ${PORT}`)
  );
});
