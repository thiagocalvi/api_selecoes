import routes from './routes.js';
import express from 'express';
const app = express();

//indica para o express ler body com json
app.use(express.json());
//ROTAS
app.use(routes)

export default app;
