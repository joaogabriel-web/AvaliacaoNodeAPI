import router from './src/router/filme.js';
import express from 'express';

const app = express()
app.use(express.json())
app.use("/api", router)

app.listen(3000, () => {
    console.log("Servidor conectado na http://localhost:3000")
})
