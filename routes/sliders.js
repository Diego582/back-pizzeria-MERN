import express from "express";
import create from "../controllers/sliders/create.js";
import read from '../controllers/sliders/read.js'
//import destroy from '../controllers/sliders/destroy.js';
//import readOne from '../controllers/sliders/redOne.js';
//import update from '../controllers/sliders/update.js'


const router = express.Router();
router.post('/', create)
router.get('/', read)
//router.delete('/:_id', destroy)
//router.put('/:_id',update)
//router.get('/:_id', readOne)


export default router;
