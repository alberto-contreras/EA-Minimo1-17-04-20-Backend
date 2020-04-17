import { Request, Response, json } from 'express';
import Student from '../models/Student';
import Subject from '../models/Subject';

//We get all the students
async function getAllStudents(req:Request,res:Response){
    await Student.find((err,doc)=>{
        if(!err)
        {
         res.send(doc);
        }
        else
        {
            res.send('Error');
        }
 })
 }
//We get all the names of the students of a degree
async function getAllStudentsOfSpecialization (req:Request, res:Response){
     const Degree: String = req.query.degree || '';
     console.log('We are searching all the students of the following degree: '+Degree);
     await Student.find(({studies: Degree}),(err,doc)=>{
        if(!err)
        {
         res.status(200).json(doc);
        }
        else
        {
         res.status(404);
        }
    })
 }

 //We add a student to the DB
async function addStudent(req:Request,res:Response){
    console.log('Adding new Student');
    console.log(req.body);
    const name = req.body.name;
    const address = req.body.address;
    const phones = req.body.phones;
    const studies = req.body.studies;
    const newstudent = new Student({name,address,phones,studies});
    await newstudent.save().then((data)=>{
        console.log('Added');
        res.status(201).json(data);
    }).catch((err)=>{
        console.log('Error in adding the user');
        res.status(500).json(err);
    })
}

async function addStudentToSubj (req:Request, res:Response){
    const idStudent = req.body._id;
    const subject = req.body.subject;
    console.log('Adding this user  : '+idStudent+' to subj: '+subject);
    console.log('We  are trying to add the Student to the Subject');
    var query = Subject.update({'name': subject},{$push : {"students":idStudent}});
    query.exec(function (err, result) {
            if (err)
            {
                res.status(404);
                console.log('ERROR! in Adding to the Subject')
            };
                res.status(200).json(result);
                console.log('User added to the Subject')
            });   
}
export default {getAllStudents,getAllStudentsOfSpecialization,addStudent,addStudentToSubj}