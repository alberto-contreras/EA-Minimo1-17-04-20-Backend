import { Router } from 'express';
import resClinicoController from '../controllers/resClinicoController'

const router: Router = Router();


router.get('/',resClinicoController.getAllResClinco); //We get all the clinic results of covid19
router.post('/',resClinicoController.addResClinico); //We add a new clinic result
router.post('/modificar',resClinicoController.modifyResClinico); //We modify a clinic result
router.get('/spec',resClinicoController.getSpecificRes); //We modify a clinic result

export default router;