import express from 'express';
import router from './src/router/filme.js';

const app = express()
app.use(express.json());
app.get("/api", router)

app.listen(3000, () => {
    console.log("Servidor conectado na http://localhost:3000")
})
