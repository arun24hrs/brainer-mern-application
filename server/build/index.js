"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const connection_1 = require("./connection");
const User_route_1 = require("./routes/User.route");
const product_model_1 = require("./model/product.model");
const dotenv_1 = require("dotenv");
(0, dotenv_1.configDotenv)();
const port = process.env.PORT || 8080;
const app = express();
app.use(express.json());
app.use("/users", User_route_1.default);
app.use("/product", product_model_1.default);
const server = app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield connection_1.connection;
        console.log("Connected to DB.");
    }
    catch (error) {
        console.log("Error connecting to DB.");
        console.log(error);
    }
    console.log(`Server is running on ${port}`);
}));
exports.default = server;
