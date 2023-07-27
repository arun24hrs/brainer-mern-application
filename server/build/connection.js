"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const mongoose_1 = require("mongoose");
const dotenv_1 = require("dotenv");
(0, dotenv_1.configDotenv)();
const url = process.env.MongoURL || undefined;
console.log(typeof (url));
const connection = mongoose_1.default.connect("");
exports.connection = connection;
