import Senha from "../shared/Senha";
import Usuario from "./Usuario";

export default class RepositorioUsuarios {
    usuarios = [
        new Usuario("gustavo@gmail.com", "2205"),
        new Usuario("claudia@gmail.com", "2112"),
        new Usuario("thiago@gmail.com", "0909")
    ]

    encontrarIndice(email: string) {
        const i = this.usuarios.findIndex((usuario) => usuario.email === email)
        return i
    }

    usuarioExiste(email: string) {
        return this.encontrarIndice(email) >= 0
    }

    loginCorreto(email: string, senha: string) {
        const i = this.encontrarIndice(email)
        const senhaEstaCorreta = Senha.comparar(senha, this.usuarios[i]?.senha)
        return senhaEstaCorreta
    }
}