// API de manejo de tareas (To-Do List):
// Endpoints: Crear, leer, actualizar y eliminar tareas.
// Características: Manejar un array en memoria para las tareas, agregar validaciones, y practicar métodos HTTP como POST, GET, PUT y DELETE.
import express from 'express'
import { validateId, validateTodo } from './sources/validation.js'

const app = express();
app.disable('x-powered-by');
app.use(express.json());
const disaredPort = process.env.PORT || 3000;

app.listen(disaredPort, ()=>{
    console.log(`App listen on PORT: http://localhost:${disaredPort}`);
})

const list = [];

// Mostrar todas las tareas
app.get('/todo', (req, res) => {
    res.status(200).send(list);
})

app.post('/todo', validateTodo, (req, res) => {
    const { title, description, state } = req.body;
    try {
        list.push(
            {
                id: list.length + 1,
                titulo: title,
                descripcion: description,
                estado: state
            }
        );
        console.log(list);
        res.status(201).send({message: 'Se creo la tarea correctamente.'})
    } catch (err) {
        console.error({error: err.message})
    }
})

app.put('/todo/:id', validateId, validateTodo, (req, res) => {
    const id = req.params.id;
    const {title, description, state} = req.body;
    try {
        const index = list.findIndex(task => task.id == id)
        if(index !== -1){
            list[index] = {
                ...list[index],
                titulo: title,
                descripcion: description,
                estado: state
            }
        }
        console.log(list);
        res.status(201).send({message: "Se modifico la tarea correctamente!"})
    } catch (error) {
        console.error(error)
    }
})

app.delete('/todo/:id', validateId, (req, res) => {
    const id = req.params.id;
    const index = list.findIndex(task => task.id == id);
    if(index !== -1){
        list.splice(index, 1);
        list.forEach((task, idx) => {
            task.id = idx + 1
        })
        res.status(204).send({message: "Se elimino la tarea correctamente!"})
    }else{
        res.status(404).send({message: "No se encontro la tarea."})
    }
})