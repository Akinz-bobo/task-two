"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonValidator = void 0;
const joi_1 = __importDefault(require("joi"));
exports.PersonValidator = joi_1.default.object({
    name: joi_1.default.string()
        .min(3)
        .max(30)
        .required(),
    email: joi_1.default.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    age: joi_1.default.number().min(10)
});
