"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const personController_1 = require("../controllers/personController");
const router = (0, express_1.Router)();
router.route('/')
    .post(personController_1.create)
    .get(personController_1.getAll);
router.route('/:id')
    .delete(personController_1.deleteUser)
    .get(personController_1.getUser)
    .patch(personController_1.updateUser);
exports.default = router;
