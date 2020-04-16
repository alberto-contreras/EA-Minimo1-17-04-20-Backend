import {Router} from 'express';
import subjectRouter from './subject';
import studentRouter from './student';
const router:Router = Router();

router.use('/school/subjects',subjectRouter);
router.use('/school/students',studentRouter);

export default router;