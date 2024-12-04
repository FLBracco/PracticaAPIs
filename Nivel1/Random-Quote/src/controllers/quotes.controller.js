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
    const { id } = req.params;
    try {
        res.status(200).send(quotes.find(quote => quote.id == id))
    } catch (error) {
        console.error({message: error.message});
        res.status(500).send({message: 'Error en el servidor.'});
    }
}

export {
    getQuotes,
    getQuotesById
}