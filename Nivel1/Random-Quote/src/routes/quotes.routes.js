import express from 'express';
import {idValidate, quoteValidate} from '../middlewares/quotes.validator.js'
import { 
    getQuotes, 
    getQuotesById, 
    createQuote 
} from '../controllers/quotes.controller.js';

const router = express.Router();

router.get('/', (req, res) =>{
    res.send('API generadora de citas aleatorias!');
})

router.get('/quotes', getQuotes);
router.get('/quotes/:id', idValidate(), getQuotesById);
router.post('/quotes', quoteValidate(), createQuote);
router.put('/quotes/:id');
router.delete('/quotes/:id');

export {
    router
}