import { Router } from 'express';
import subjectController from '../controllers/subjectController'

const router: Router = Router();

router.get('/',subjectController.getAllSubjName);//We get all the subject name
router.post('/',subjectController.addSubject);//We add a new subject
router.get('/details',subjectController.getDetailsSubj);//We get all the details of a subject
router.get('/students',subjectController.getAllStudentsofSubj);//We get all the students of a subject

export default router;