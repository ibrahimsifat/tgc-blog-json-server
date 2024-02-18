const data = require("./db.js");
const express = require("express");
const path = require("path");
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 9000;

server.use("/static", express.static(path.join(__dirname, "public")));

server.use(middlewares);
server.use(router);

server.listen(port);
