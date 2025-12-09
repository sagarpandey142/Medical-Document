const express = require("express");
const cors = require("cors");
const documentRoutes = require("./routes/document.routes");
const { createTable } = require("./model/document.model");

const app = express();

app.use(cors());
app.use(express.json());

createTable();

app.use("/documents", documentRoutes);

app.get("/", (req, res) => {
  res.send(" Backend Running");
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(` Server started on http://localhost:${PORT}`);
});
