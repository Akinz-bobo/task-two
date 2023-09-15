"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const express_mongo_sanitize_1 = __importDefault(require("express-mongo-sanitize"));
const personRoutes_1 = __importDefault(require("./routes/personRoutes"));
const db_1 = __importDefault(require("./data/db"));
// connect to database
(0, db_1.default)().then(() => {
    const app = (0, express_1.default)();
    app.use(body_parser_1.default.json());
    // sanitize against NoSQL injection
    app.use((0, express_mongo_sanitize_1.default)());
    // sanitize against site script xss
    app.use("/api", personRoutes_1.default);
    app.all('*', (error, req, res, next) => {
        console.log("An error occurred");
        res.status(500).json({ message: "internal server error", error: error.stack });
    });
    app.listen(5000, () => console.log("server listening on port:5000"));
});
