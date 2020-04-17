"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const subject_1 = __importDefault(require("./subject"));
const student_1 = __importDefault(require("./student"));
const router = express_1.Router();
router.use('/school/subjects', subject_1.default);
router.use('/school/students', student_1.default);
exports.default = router;
