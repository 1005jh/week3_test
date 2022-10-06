const express = require("express");
const app = express();
const port = 3010;
// app.js
const usersRouter = require("./routes/index"); //./상대경로
//웹서버에 mongoDB에 연결
const connect = require("./schemas"); //index.js는 국룰이라 생략함
connect();

app.use(express.json());

app.use("/", [usersRouter]);

app.listen(port, () => {
  console.log(port, "포트로 서버가 열렸어요!");
});
