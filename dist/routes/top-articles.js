"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const controllers_1 = require("../controllers");
const router = express.Router();
router.get("top-articles", controllers_1.topArticles);
exports.default = router;
