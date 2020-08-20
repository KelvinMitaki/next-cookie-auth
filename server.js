const next = require("next");
const express = require("express");

const dev = process.env.NODE_ENV !== "production";
const PORT = process.env.PORT || 3000;
const app = next({ dev });

app.prepare().then(() => {
  const server = express();
  server.listen(PORT, err =>
    err ? console.log({ err }) : console.log(`server started on port ${PORT}`)
  );
});
