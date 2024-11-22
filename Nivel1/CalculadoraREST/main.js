// Calculadora REST
// Crea una API con rutas para sumar, restar, multiplicar y dividir.
// Ejemplo: /sum?num1=3&num2=5 devuelve 8.
// Practicas: rutas básicas, parámetros de consulta.
import express from 'express';
import {suma, resta, div, multi} from './operaciones.js'

const app = express();
app.disable('x-powered-by')
app.use(express.json())
const desiredPort = process.env.PORT || 3000;

app.listen(desiredPort, ()=>{
    console.log(`App listen on PORT: http://localhost:${desiredPort}`);
})

app.get('/', (req, res)=>{
    res.status(200).send({message: 'Hola mundo!'})
})

const validarNums = (req, res, next) =>{
    const num1 = Number(req.params.num1);
    const num2 = Number(req.params.num2);

    if(isNaN(num1) || isNaN(num2)){
        return res.status(400).send({message: 'Ambos valores tienen que ser numericos.'});
    }
    if(!Number.isInteger(num1) || !Number.isInteger(num2)){
        return res.status(400).send({message: 'Ambos valores tienen que ser enteros.'});
    }
    next();
}

app.get('/:operacion/:num1/:num2', validarNums, (req,res)=>{
    const { operacion, num1, num2 } = req.params;
    const op = operacion.toLowerCase();
    try {
        switch (op) {
            case 'suma':
                return res.status(200).send({message: `La suma entre ${num1} y ${num2} es: ${suma(num1, num2)}`})
            case 'resta':
                return res.status(200).send({message: `La resta entre ${num1} y ${num2} es: ${resta(num1, num2)}`})
            case 'multiplicacion':
                return res.status(200).send({message: `La multiplicación entre ${num1} y ${num2} es: ${multi(num1, num2)}`})
            case 'division':
                return res.status(200).send({message: `La division entre ${num1} y ${num2} es: ${div(num1, num2)}`})
            default:
                return res.status(400).send({message: 'Operación no encontrada.'})
        }
    } catch (e) {
        if(e.message === 'No se puede dividir en cero'){
            return res.status(422).send({message: e.message})
        }
        return res.status(500).send({message: 'Ocurrio un error interno.'})
    }
})