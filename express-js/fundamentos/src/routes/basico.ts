import { Router } from "express"

const router = Router();

// app.use('/', (req, res) => {
//     res.send('<h1>Hello World</h1>')
// }) // Não é tão usual utilizar o use

// Utiliza-se de métodos http usuais (get, post, etc)
router.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

export default router