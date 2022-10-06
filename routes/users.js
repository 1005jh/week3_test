const express = require("express");
// const { any } = require("webidl-conversions");
const router = express.Router();

const Users = require("../schemas/user.js");

router.post("/user", async (req, res) => {
  try {
    const { name, ID, pw } = req.body;
    console.log(req.body);
    const createduser = await Users.create({
      name,
      ID,
      pw,
    });
    res.json({ users: createduser });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

router.get("/user", async (req, res) => {
  try {
    const users = await Users.find({}).select("name ID pw");
    res.json({ result: users });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: "회원 목록 조회 실패!",
    });
  }
});

router.get("/user/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    console.log(userId);
    const detail = await Users.findOne({ _id: userId }).select("name ID pw");
    console.log(detail);
    res.json({ result: detail });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: "회원 상세 목록 조회 실패!",
    });
  }
});

module.exports = router;
