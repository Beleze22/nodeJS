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
        repo.novo(nome, +preco)
        res.status(201).send()
    } else {
        res.sendStatus(406)
    }
})

router.get("/:codigo", (req, res) => {
    const codigo = req.params.codigo;
    const produto = repo.obterPorCodigo(codigo)
    if (codigo) {
        res.status(200).send(produto)
    } else {
        res.sendStatus(204)
    }
})

router.put("/:codigo", (req, res) => {
    const codigo = req.params.codigo
    const { nome, preco } = req.body
    if (preco) {
        if (isNaN(preco)) {
            res.sendStatus(406)
            return
        }
    }
    repo.alterarPorCodigo(codigo, nome, +preco)
    res.sendStatus(200)
})

router.delete("/:codigo", (req, res) => {
    const codigo = req.params.codigo
    repo.deletarPorCodigo(codigo)
    res.sendStatus(200)
})

export default router