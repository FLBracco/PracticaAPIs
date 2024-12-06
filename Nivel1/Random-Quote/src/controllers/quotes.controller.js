import { validationResult } from "express-validator";

//Citas aleatorias
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

//Crear una nueva cita con autor.
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

//Modifica cita especifica
const updateQuote = (req, res) => {
    const validate = validationResult(req)
    if(!validate.isEmpty()){
        res.status(400).send({errors: validate.array()});
    }

    const id = Number(req.params.id);
    const {cita, autor} = req.body

    try {
        const index = quotes.findIndex(quote => quote.id == id)
        if(index !== -1){
            quotes[index] = {
                ...quotes[index],
                quote: cita,
                author: autor
            }
            res.status(200).send({message: 'Se modifico la cita exitosamente '})
        }else{
            res.status(404).send({message: 'No se encontro la cita'}); 
        }
        
    } catch (error) {
        console.error({Error: error.message});
    }
}

//Borra cita especifica
const deleteQuote = (req, res) => {
    const validate = validationResult(req)
    if(!validate.isEmpty()){
        res.status(400).send({errors: validate.array()});
    }
    
    const id = Number(req.params.id);
    const index = quotes.findIndex(quote => quote.id == id);
    if(index !== -1){
        const data = quotes.splice(index, 1)
        quotes.forEach((quote, idx) => {
            quote.id = idx + 1
        })
        res.status(200).send({
            message: "Se elimino la cita exitosamente",
            quote: data[0]
        });
    }else{
        res.status(404).send({message: 'No se encontro la cita'});
    }
}

export {
    getQuotes,
    getQuotesById,
    createQuote,
    updateQuote,
    deleteQuote
}