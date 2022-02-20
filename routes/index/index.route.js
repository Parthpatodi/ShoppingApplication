const express = require("express");
const router = express.Router();
const indexRouter = require("../../controller/index.controller");
router.get("/",indexRouter.indexPage);
module.exports = router;