import { Router } from "express";
import RepositorioUsuarios from "@src/core/usuarios/RepositorioUsuarios";
import jwt from "jsonwebtoken"

const router = Router()
const repo = new RepositorioUsuarios()

router.post("/", (req, res) => {
    const { email, senha } = req.body

    if (!repo.usuarioExiste(email)) {
        res.sendStatus(204)
    }

    else if (!repo.loginCorreto(email, senha)) {
        res.sendStatus(204)
    }

    else {
        const token = jwt.sign({ email, senha }, process.env.ACCESS_TOKEN_SECRET as "secret")
        res.status(200).json({ token })
    }
})

export default router