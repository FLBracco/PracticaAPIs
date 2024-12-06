import { validationResult } from "express-validator";

const quotes = [
    { "id": 1, "quote": "La vida es lo que pasa mientras estás ocupado haciendo otros planes.", "author": "John Lennon" },
    { "id": 2, "quote": "El éxito es aprender a ir de fracaso en fracaso sin desesperarse.", "author": "Winston Churchill" }
]

//Obtener todas las citas
const getQuotes = (req, res) => {
    res.status(200).send(quotes);
}

//Obtener cita especifica
const getQuotesById = (req, res) => {
    const validate = validationResult(req)
    if(!validate.isEmpty()){
        res.status(400).send({errors: validate.array()});
    }

    const  id  = Number(req.params.id);
    
    try {
        res.status(200).send(quotes.find(quote => quote.id == id))
    } catch (error) {
        console.error({message: error.message});
        res.status(500).send({message: 'Error en el servidor.'});
    }
}

//Crear una nueva cita, con autor e id.
const createQuote = (req, res) => {
    const validate = validationResult(req);
    if(!validate.isEmpty()){
        res.status(400).send({errors: validate.array()});
    }

    const { cita, autor } = req.body;
    
    try {
        quotes.push({
            id: quotes.length + 1,
            quote: cita,
            author: autor
        })
        res.status(201).send({message: 'Se agrego la cita correctamente'})
    } catch (error) {
        console.error({Error: error.message});
    }
}

export {
    getQuotes,
    getQuotesById,
    createQuote
}