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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAll = exports.updateUser = exports.deleteUser = exports.getUser = exports.create = void 0;
const validateSchema_1 = require("../utils/validateSchema");
const Person_1 = __importDefault(require("../models/Person"));
const create = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const validatedData = yield validateSchema_1.PersonValidator.validateAsync(req.body);
            const newUser = yield Person_1.default.create(validatedData);
            res.status(201).json({
                data: newUser
            });
        }
        catch (error) {
            res.status(500).json({ error });
            next(error);
        }
    });
};
exports.create = create;
const getUser = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        try {
            const user = yield Person_1.default.findById(id);
            res.status(200).json({ data: user });
        }
        catch (error) {
            res.status(500).json({ error });
            next(error);
        }
    });
};
exports.getUser = getUser;
const deleteUser = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        try {
            yield Person_1.default.findByIdAndDelete(id);
            res.status(200).json({ message: "User deleted successfully!" });
        }
        catch (error) {
            res.status(500).json({ error });
            next(error);
        }
    });
};
exports.deleteUser = deleteUser;
const updateUser = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        // const data = await PersonValidator.validateAsync(req.body);
        try {
            const user = yield Person_1.default.findByIdAndUpdate(id, req.body, { new: true });
            res.status(200).json({ data: user });
        }
        catch (error) {
            res.status(500).json({ error });
            next(error);
        }
    });
};
exports.updateUser = updateUser;
const getAll = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        let queryStr = JSON.stringify(req.query);
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
        const queryObj = JSON.parse(queryStr);
        console.log(queryObj);
        try {
            const user = yield Person_1.default.find(queryObj);
            res.status(200).json({ data: user });
        }
        catch (error) {
            res.status(500).json({ error });
            next(error);
        }
    });
};
exports.getAll = getAll;
