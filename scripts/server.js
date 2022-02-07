// const express = require("express");
// const path = require("path");
// const open = require("open");

import express from "express";
import path from "path";
import open from "open";

import webpack from "webpack";
import config from "../webpack.config.js";
import webpackDevMiddleware from "webpack-dev-middleware";

const port = 3000;
const app = express();

const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler));

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../src/index.html"));
});
app.listen(port, function (err) {
if (err) {
console.log(err);
} else {
open("http://localhost:" + port);
}
});