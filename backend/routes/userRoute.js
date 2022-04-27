const express = require("express");
const {
  register,
  getReportDetail,
} = require("../controllers/reportController");

const router = express.Router();

router.route("/register").post(register);
router.route("/:id").get(getReportDetail);

module.exports = router;
