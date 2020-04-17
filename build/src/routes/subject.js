"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const subjectController_1 = __importDefault(require("../controllers/subjectController"));
const router = express_1.Router();
router.get('/', subjectController_1.default.getAllSubjName); //We get all the subject name
router.post('/', subjectController_1.default.addSubject); //We add a new subject
router.get('/details', subjectController_1.default.getDetailsSubj); //We get all the details of a subject
router.get('/students', subjectController_1.default.getAllStudentsofSubj); //We get all the students of a subject
exports.default = router;
