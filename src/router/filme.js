import express from 'express';
import Controller from '../controller/filme.js'

const router = express.Router();

router.get("/buscar", Controller.Buscar)
router.get("/buscarUm/:id", Controller.BuscarUm)
router.post("/criar", Controller.Criar)
router.put("/alterar/:id", Controller.Alterar)
router.delete("/deletar/:id", Controller.Deletar)
router.get("/categoria/:classificacao", Controller.Categoria)
router.get("/filmes/:id/lancado", Controller.Lancamento)

export default router