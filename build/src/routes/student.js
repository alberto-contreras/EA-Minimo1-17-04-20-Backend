"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const studentController_1 = __importDefault(require("../controllers/studentController"));
const router = express_1.Router();
router.post('/', studentController_1.default.addStudent); //We add a student
router.get('/degree', studentController_1.default.getAllStudentsOfSpecialization); //We get all the students of a degree
router.get('/', studentController_1.default.getAllStudents); //We get all the students
router.post('/subj', studentController_1.default.addStudentToSubj); //We add a student to a subject
exports.default = router;
