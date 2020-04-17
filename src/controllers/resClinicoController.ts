import { Request, Response, json } from 'express';
import ResClinico from '../models/ResClinico';

//We get all the clinic results
async function getAllResClinco(req:Request,res:Response){
    await ResClinico.find((err,doc)=>{
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

 async function getSpecificRes(req:Request,res:Response){
    var id = req.query._id || '';
    await ResClinico.findOne({'_id':id},(err,doc)=>{
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


 //We add a ResClinic to the DB
async function addResClinico(req:Request,res:Response){
    console.log('Adding new ResClinico');
    console.log(req.body);
    const nombre = req.body.nombre;
    const idMuestra = req.body.idMuestra;
    const dataResultado = req.body.dataResultado;
    const resultado = req.body.resultado;
    const tipoTest = req.body.tipoTest;
    const newResClinico = new ResClinico({nombre,idMuestra,dataResultado,resultado,tipoTest});
    await newResClinico.save().then((data)=>{
        console.log('Added');
        res.status(201).json(data);
    }).catch((err)=>{
        console.log('Error in adding the ResClinico');
        res.status(500).json(err);
    })
}

async function modifyResClinico(req:Request, res:Response){
    console.log('Updating  ResClinico');
    console.log(req.body);
    const _id = req.body._id;
    const nombre = req.body.nombre;
    const idMuestra = req.body.idMuestra;
    const dataResultado = req.body.dataResultado;
    const resultado = req.body.resultado;
    const tipoTest = req.body.tipoTest;
    console.log('We  are trying to update the ResClinico');
    var query = ResClinico.findOneAndUpdate({'_id': _id},
        {
            'nombre':nombre,
            'idMuestra':idMuestra,
            'dataResultado': dataResultado,
            'resultado':resultado,
            'tipoTest':tipoTest
        });
    query.exec(function (err, result) {
            if (err)
            {
                res.status(404).json(err);
                console.log('ERROR! in Updating the ResClinico')
            };   
                res.status(200).json(result);
                console.log('ResClinico updated Succesfully')
            });   
}
export default {getAllResClinco,addResClinico, modifyResClinico, getSpecificRes}