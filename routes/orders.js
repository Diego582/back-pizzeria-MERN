import express from "express";
import create from '../controllers/orders/create.js';
import destroy from '../controllers/orders/destroy.js';
import read from '../controllers/orders/read.js';
import readOne from '../controllers/orders/readOne.js';
import update from '../controllers/orders/destroy.js'

const router = express.Router();

/* GET users listing. */
router.post('/', create)

//READ
router.get('/', read)
router.get('/:id', readOne)

//UPDATE
router.put('/:id',update)

//DESTROY
router.delete('/:id', destroy)

export default router;