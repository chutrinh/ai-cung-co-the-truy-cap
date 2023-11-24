const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
const cors = require("cors");
app.use(
  cors({
    origin: "*", // Hoặc dùng "*" nếu bạn muốn cho phép mọi origin
    methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD"],
    credentials: true,
  })
);

app.use("/", (req, res, next) => {
  res.json("chú trình");
});

app.listen(5000, () => {
  console.log("connected");
});
