import routes from './routes.js';
import express from 'express';
const app = express();

//ROTAS
app.use(routes)

//indica para o express ler body com json
app.use(express.json());

export default app;
