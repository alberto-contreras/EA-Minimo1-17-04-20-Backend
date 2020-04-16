import { Request, Response, json } from 'express';
import Student from '../models/Student';
import Subject from '../models/Subject';

//We get all the names of the Subj from the DB
async function getAllSubjName(req:Request,res:Response){
    var query = Subject.find({}).select('name');

    await query.exec(function (err, result) {
        if (err)
        {
           res.status(404);
        };
           res.status(200).json(result);
    });
}

//We get all the info of a subject that we send in the get parameter 
async function getDetailsSubj(req:Request,res:Response){
    var nameSubj = req.query.name || '';
    var query = Subject.find({'name': nameSubj});

    await query.exec(function (err, result) {
        if (err)
        {
           res.status(404);
        };
           res.status(200).json(result);
    });
}

//Here we add a new subject
async function addSubject(req:Request,res:Response){
    console.log('Adding new Subject');
    const name = req.body.name;
    const students = req.body.students;
    const newsubject = new Subject({name,students});
    await newsubject.save().then((data)=>{
        console.log('Added');
        res.status(201).json(data);
    }).catch((err)=>{
        console.log('Error in adding the subject');
        res.status(500).json(err);
    })
}

async function getAllStudentsofSubj(req:Request,res:Response) {
    console.log('Getting al the students of a Subject')
    var nameSubj = req.query.name || '';
    let subjects = await Subject.findOne({'name':nameSubj}).populate('students'); //Populate allow us to put all the data of a reference
    if(subjects) {
        res.status(200).json(subjects);
    } else {
        res.status(424).send({message: 'Subjects not found'});
    }

};

export default {getAllSubjName,getDetailsSubj,addSubject,getAllStudentsofSubj}