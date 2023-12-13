import { Router } from "express";

const router = Router()

router.get('/frutas/:id', (req, res) => {
    const frutas = ['maçã', 'uva', 'limão', 'banana']
    const id = +req.params.id
    console.log(id)
    if (id >= 0 && id < frutas.length) {
        res.status(200).send(frutas[id])
    } else {
        res.sendStatus(204)
    }
})

router.get('/pessoa/:nome/:cor', (req, res) => {
    const novaPessoa = {
        nome: req.params.nome,
        corFavorita: req.params.cor
    }
    res.status(201).send(`A cor favorita de ${novaPessoa.nome} é ${novaPessoa.corFavorita}`)
})

export default router