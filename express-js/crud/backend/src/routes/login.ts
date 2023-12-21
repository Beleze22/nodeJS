import { Router } from "express";
import RepositorioUsuarios from "@src/core/usuarios/RepositorioUsuarios";

const router = Router()
const repo = new RepositorioUsuarios()

router.post("/", (req, res) => {
    const { email, senha } = req.body

    if (!repo.usuarioExiste(email)) {
        res.sendStatus(204)
    }

    if (!repo.loginCorreto(email, senha)) {
        res.sendStatus(204)
    }

    res.status(200).send("Login Correto")
})

export default router