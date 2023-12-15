import { Router } from "express";
import RepositorioProdutos from "@src/core/produtos/RepositorioProdutos";

const repo = new RepositorioProdutos()
const router = Router()

router.get("/", (req, res) => {
    const dados = repo.obterTodos()
    res.status(200).send(dados)
})

router.post("/", (req, res) => {
    const { nome, preco } = req.body
    if (nome && preco) {
        repo.novo(nome, preco)
        res.status(201).send()
    } else {
        res.sendStatus(406)
    }



})

export default router