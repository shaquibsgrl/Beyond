const express = require("express");
const connect = require("./configs/db");
const cors=require("cors")

const userController = require("./controller/userController");

const { signup, login,FetchUser } = require("./controller/auth.controller");


const app = express();

app.use(express.json());
 app.use(cors())
app.use("/users", userController);

app.post("/signup", signup);
app.post("/login", login);
app.get("/admin",FetchUser)


app.listen(5000, async () => {
  try {
    await connect();
    console.log("Listening on port 5000");
  } catch (err) {
    console.log(err.message);
  }
});
