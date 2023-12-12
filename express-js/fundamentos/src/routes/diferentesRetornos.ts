import path from 'path' // Módulo do Node que permite trabalhar com caminhos
import { Router } from 'express'

const router = Router()

router.get('/variavel', (req, res) => {
    let v = 'Adeus'
    res.send(v)
})

router.get('/variavelNum', (req, res) => {
    let v = 1994
    res.json(v)
})


router.get('/objeto', (req, res) => {
    const obj = { nome: 'Gustavo', idade: 29 }
    res.send(obj) // Transforma o objeto em JSON
})

router.get('/arrayObjetos', (req, res) => {
    const array = [
        { modelo: 'compass', ano: 2020 },
        { modelo: 'tiggo2', ano: 2020 },
        { modelo: 'pajero', ano: 2001 }
    ]
    res.send(array)
})

router.get('/html', (req, res) => {
    res.sendFile(path.join(__dirname, "..", "assets", "pagina.html"))
}) //path.join procura saber qual sistema operacional está rodando e une o caminho com o separador específico do OS

router.get('/pdf', (req, res) => {
    res.sendFile(path.join(__dirname, "..", "assets", "FALHAS TRINCAS 01-2023.pdf"))
})

export default router