import express from "express";
import create from '../controllers/promotions/create.js';
import destroy from '../controllers/promotions/destroy.js';
import read from '../controllers/promotions/read.js';
import readOne from '../controllers/promotions/readOne.js';
import update from '../controllers/promotions/update.js';

const router = express.Router();

// CREATE
router.post('/', create);

// READ
router.get('/', read);
router.get('/:id', readOne);

// UPDATE
router.put('/:id', update);

// DESTROY
router.delete('/:id', destroy);

export default router;
