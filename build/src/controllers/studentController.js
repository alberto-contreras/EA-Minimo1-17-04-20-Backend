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
const Student_1 = __importDefault(require("../models/Student"));
const Subject_1 = __importDefault(require("../models/Subject"));
//We get all the students
function getAllStudents(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        yield Student_1.default.find((err, doc) => {
            if (!err) {
                res.send(doc);
            }
            else {
                res.send('Error');
            }
        });
    });
}
//We get all the names of the students of a degree
function getAllStudentsOfSpecialization(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const Degree = req.query.degree || '';
        console.log('We are searching all the students of the following degree: ' + Degree);
        yield Student_1.default.find(({ studies: Degree }), (err, doc) => {
            if (!err) {
                res.status(200).json(doc);
            }
            else {
                res.status(404);
            }
        });
    });
}
//We add a student to the DB
function addStudent(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Adding new Student');
        const name = req.body.name;
        const address = req.body.address;
        const phones = req.body.phones;
        const studies = req.body.studies;
        const newstudent = new Student_1.default({ name, address, phones, studies });
        yield newstudent.save().then((data) => {
            console.log('Added');
            res.status(201).json(data);
        }).catch((err) => {
            console.log('Error in adding the user');
            res.status(500).json(err);
        });
    });
}
function addStudentToSubj(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const idStudent = req.body._id;
        const subject = req.body.subject;
        console.log('Adding this user  : ' + idStudent + ' to subj: ' + subject);
        console.log('We  are trying to add the Student to the Subject');
        var query = Subject_1.default.update({ 'name': subject }, { $push: { "students": idStudent } });
        query.exec(function (err, result) {
            if (err) {
                res.status(404);
                console.log('ERROR! in Adding to the Subject');
            }
            ;
            res.status(200).json(result);
            console.log('User added to the Subject');
        });
    });
}
exports.default = { getAllStudents, getAllStudentsOfSpecialization, addStudent, addStudentToSubj };
