import { Router } from "express";
import fs from "fs"

const router = Router()

router.get('/ok', (req, res) => {
    res.sendStatus(200)
})

router.get('/segredo', (req, res) => {
    res.status(401).send()
})

router.get('/naoEncontrada', (req, res) => {
    res.status(404).send('Página não encontrada')
})

router.get('/imagem', (req, res) => {
    if (fs.existsSync("../assets/foto")) {
        res.sendStatus(200)
    }
    res.sendStatus(204)
})

export default router