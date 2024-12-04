import express from 'express';
import {router} from './src/routes/quotes.routes.js';

const app = express();
app.disabled('x-powered-by');
app.use(express.json());

const disaredPort = process.env.PORT || 3000;

app.listen(disaredPort, ()=>{
    console.log(`App listen on PORT http://localhost:${disaredPort}`);
})

app.use(router)