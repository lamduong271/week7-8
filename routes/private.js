var express = require("express");
var router = express.Router();
const { verifyToken } = require("../middleware/auth");

router.get("/private", verifyToken, async (req, res) => {
  console.log(req.user);
  res.send({ email: req.user.email });
});
module.exports = router;
