const next = require("next");
const express = require("express");
const { default: Axios } = require("axios");
const cookieParser = require("cookie-parser");

const dev = process.env.NODE_ENV !== "production";
const PORT = process.env.PORT || 3000;
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.use(express.json());
  server.use(cookieParser("kjshdkhdskjksdh"));
  server.post("/user/login", async (req, res) => {
    try {
      const users = await Axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      const user = users.data.find(
        user =>
          user.email === req.body.email && user.website === req.body.password
      );
      if (!user) {
        return res.status(401).send("Invalid email or password");
      }
      const userData = {
        name: user.name,
        email: user.email,
        type: "authenicated"
      };
      res.cookie("token", userData, {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: !dev,
        sameSite: true,
        signed: true
      });
      res.send(userData);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  server.get("*", (req, res) => handle(req, res));
  server.listen(PORT, err =>
    err ? console.log({ err }) : console.log(`server started on port ${PORT}`)
  );
});
