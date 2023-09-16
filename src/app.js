const exspress = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRouter = require("./routes/users");

dotenv.config();

const {
  PORT = 3000,
  API_URL = "http://127.0.0.1",
  MONGO_URL = "mongodb://127.0.0.1:27017/test",
} = process.env;

const handleError = (error) => {
  alert(error);
};

mongoose.connect(MONGO_URL).catch((error) => handleError(error));

const app = exspress();

app.use(cors());

app.use(bodyParser.json());

app.use(userRouter);

app.listen(PORT, () => {
  console.log(`Сервер запущен по адресу: ${API_URL}:${PORT}`);
});
