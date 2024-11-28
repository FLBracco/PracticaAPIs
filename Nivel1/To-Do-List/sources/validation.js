const validateId = (req, res, next) => {
    const id = Number(req.params.id);
    if(isNaN(id)){
        return res.status(400).send({message: 'Id debe ser un número'});
    }
    if(!Number.isInteger(id)){
        return res.status(400).send({message: 'Id debe ser un entero'});
    }
    if(id<=0){
        return res.status(400).send({message: 'Id debe ser positivo'})
    }
    next();
}

const validateTodo = (req, res, next) => {
    const {title, description, state} = req.body
    if(!title || !description || !state){
        res.status(400).send({message: "Todos los campos son obligatorios!"})
    }
    next();
}

export{
    validateId,
    validateTodo
}