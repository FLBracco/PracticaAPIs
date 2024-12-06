import { param , body } from 'express-validator';

//middleware para validar parametro de ruta ID
const idValidate = () => param('id').isInt({min: 1});

//middleware para validar body
const quoteValidate = () => [
    body('cita').isString().notEmpty(),
    body('autor').isString().notEmpty()
]

export {
    idValidate,
    quoteValidate
}