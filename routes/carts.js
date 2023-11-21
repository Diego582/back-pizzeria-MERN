import express from "express";
import create from '../controllers/carts/create.js';
import read from '../controllers/carts/read.js';


const router = express.Router();

/* GET users listing. */
router.post('/', create)

//READ
router.get('/', read)


export default router;
