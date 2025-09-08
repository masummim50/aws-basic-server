import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(
    `Server is running with zeros folder change on http://localhost:${PORT}`
  );
});
