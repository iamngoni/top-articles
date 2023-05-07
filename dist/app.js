"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const routes_1 = require("./routes");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger("dev"));
app.use(cors());
app.use("/api/1.0/articles", routes_1.topArticles);
app.get('*', function (req, res, next) {
    setImmediate(function () {
        return next(new Error('Route does not exist!.'));
    });
});
app.use(function (error, req, res, next) {
    res.status(404).json({
        message: error.message,
        status: 404
    });
    next();
});
app.listen(process.env.PORT || 8000, function () {
    console.log('API is up and running');
});
