"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const personSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        require: [true, "name must be provided"],
        trim: true,
    },
    email: {
        type: String,
        require: [true, "email must be provided"],
        unique: true
    },
    age: {
        type: Number,
        min: 10,
    }
}, { timestamps: true });
const Person = mongoose_1.default.model("Person", personSchema);
exports.default = Person;
