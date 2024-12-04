const validateId = (req, res, next) => {
    const id = Number(req.params.id);
    if(isNaN(id)){
        return res.status(400).send({message: 'Id necesita ser un número'})
    }
    if(!Number.isInteger(id)){
        return res.status(400).send({message: 'Id necesita ser un número entero'})
    }
    if(id <= 0){
        return res.status(400).send({message: 'Id necesita ser un número positivo'})
    }
    next();
}

export {
    validateId
}