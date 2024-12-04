import express from 'express';
import {validateId} from '../middlewares/quotes.validator.js'
import { getQuotes, getQuotesById } from '../controllers/quotes.controller.js';

const router = express.Router();

router.get('/', (req, res) =>{
    res.send('API generadora de citas aleatorias!');
})

router.get('/quotes', getQuotes);
router.get('/quotes/:id', validateId, getQuotesById);
router.post('/quotes');
router.put('/quotes/:id');
router.delete('/quotes/:id');

export {
    router
}