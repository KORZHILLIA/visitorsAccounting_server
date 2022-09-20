const express = require("express");
const router = express.Router();
const { createTryCatchWrapper } = require("../helpers");
const ctrl = require("../controllers/visitors");

router.get("/", createTryCatchWrapper(ctrl.getVisitors));

router.get("/:visitorId", createTryCatchWrapper(ctrl.getVisitorById));

router.post("/", createTryCatchWrapper(ctrl.addVisitor));

router.put("/:visitorId", createTryCatchWrapper(ctrl.updateVisitor));

router.delete("/:visitorId", createTryCatchWrapper(ctrl.deleteVisitor));

module.exports = router;
