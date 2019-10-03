const express = require("express");
const server = express();

server.get("/", (req, res) => {
  res.status(200).json({ hello: "Node App" });
});
const port = process.env.PORT || 8000;
server.listen(port, () => console.log(`\n api runningon ${port}\n`));
