// API de manejo de tareas (To-Do List):
// Endpoints: Crear, leer, actualizar y eliminar tareas.
// Características: Manejar un array en memoria para las tareas, agregar validaciones, y practicar métodos HTTP como POST, GET, PUT y DELETE.
import express from 'express'

const app = express();
app.disable('x-powered-by');
app.use(express.json());

const disaredPort = process.env.PORT || 3000;

app.listen(disaredPort, ()=>{
    console.log(`App listen to PORT: ${disaredPort}`);
})

const list = [];

