// API de manejo de tareas (To-Do List):
// Endpoints: Crear, leer, actualizar y eliminar tareas.
// Características: Manejar un array en memoria para las tareas, agregar validaciones, y practicar métodos HTTP como POST, GET, PUT y DELETE.
import express from 'express'

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

app.post('/todo', (req, res) => {
    const { title, description, state } = req.body;
    list.push(
        {
            id: list.length + 1,
            titulo: title,
            descripcion: description,
            estado: state
        }
    );
    res.status(200).send({message: 'Se creo la tarea correctamente.'})
    console.log(list);
})