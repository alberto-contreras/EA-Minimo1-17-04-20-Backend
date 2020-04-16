import { Router } from 'express';
import studentController from '../controllers/studentController'

const router: Router = Router();

router.post('/',studentController.addStudent); //We add a student
router.get('/degree',studentController.getAllStudentsOfSpecialization); //We get all the students of a degree
router.get('/',studentController.getAllStudents); //We get all the students
router.post('/subj',studentController.addStudentToSubj); //We add a student to a subject

export default router;