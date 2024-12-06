import express from 'express';
import {idValidate, quoteValidate} from '../middlewares/quotes.validator.js'
import { 
    getQuotes, 
    getQuotesById, 
    createQuote,
    updateQuote,
    deleteQuote
} from '../controllers/quotes.controller.js';

const router = express.Router();

router.get('/', (req, res) =>{
    res.send('API generadora de citas aleatorias!');
})

//Obtener todas las citas
router.get('/quotes', getQuotes);
//Obtener cita especifica
router.get('/quotes/:id', idValidate(), getQuotesById);
//Agregar cita nueva
router.post('/quotes', quoteValidate(), createQuote);
//Modificar cita especifica
router.put('/quotes/:id', idValidate(), quoteValidate(), updateQuote);
//Borrar cita especifica
router.delete('/quotes/:id', idValidate(), deleteQuote);

export {
    router
}