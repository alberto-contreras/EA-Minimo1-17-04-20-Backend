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
const Subject_1 = __importDefault(require("../models/Subject"));
//We get all the names of the Subj from the DB
function getAllSubjName(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        var query = Subject_1.default.find({}).select('name');
        yield query.exec(function (err, result) {
            if (err) {
                res.status(404);
            }
            ;
            res.status(200).json(result);
        });
    });
}
//We get all the info of a subject that we send in the get parameter 
function getDetailsSubj(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        var nameSubj = req.query.name || '';
        var query = Subject_1.default.find({ 'name': nameSubj });
        yield query.exec(function (err, result) {
            if (err) {
                res.status(404);
            }
            ;
            res.status(200).json(result);
        });
    });
}
//Here we add a new subject
function addSubject(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Adding new Subject');
        const name = req.body.name;
        const students = req.body.students;
        const newsubject = new Subject_1.default({ name, students });
        yield newsubject.save().then((data) => {
            console.log('Added');
            res.status(201).json(data);
        }).catch((err) => {
            console.log('Error in adding the subject');
            res.status(500).json(err);
        });
    });
}
function getAllStudentsofSubj(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Getting al the students of a Subject');
        var nameSubj = req.query.name || '';
        let subjects = yield Subject_1.default.findOne({ 'name': nameSubj }).populate('students'); //Populate allow us to put all the data of a reference
        if (subjects) {
            res.status(200).json(subjects);
        }
        else {
            res.status(424).send({ message: 'Subjects not found' });
        }
    });
}
;
exports.default = { getAllSubjName, getDetailsSubj, addSubject, getAllStudentsofSubj };
