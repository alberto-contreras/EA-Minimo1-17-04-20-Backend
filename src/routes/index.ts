import {Router} from 'express';
import subjectRouter from './subject';
import studentRouter from './student';
import resClinicoRouter from './resClinico';

const router:Router = Router();

router.use('/school/subjects',subjectRouter);
router.use('/school/students',studentRouter);
router.use('/covid19/resclinicos',resClinicoRouter);

export default router;