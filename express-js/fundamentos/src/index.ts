import express from 'express'// Importando o EXPRESS pois precisamos dele para criar baseado nele
import rotasBasico from "./routes/basico"
import rotasDiferentesRetornos from "./routes/diferentesRetornos"
import rotasAninhadas from "./routes/rotasAninhadas"
import rotasStatus from "./routes/status"
import rotasParametros from "./routes/parametrosRota"
import rotasParametrosQuery from "./routes/parametrosQuery"
import rotasMetodos from "./routes/metodos"

// Criando o APP utilizando a função construtiva do express
const app = express()

// Definindo a porta que a aplicação vai rodar
const porta = 8080

//middleware
// app.use((req, res, next) => {
//     console.log(`Data: ${Date.now()}`)
//     next()
// })

//middleware para leitura do body da requisição (se definir aqui fica global)
app.use(express.urlencoded({ extended: true }))

app.use(rotasBasico)
app.use(rotasDiferentesRetornos)
app.use("/produtos", rotasAninhadas)
app.use("/status", rotasStatus)
app.use("/parametros", rotasParametros)
app.use("/parametrosQuery", rotasParametrosQuery)
app.use("/metodos", rotasMetodos)

// Aplicativo fique escutando na porta 8080, esperando alguma requisição
app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}!`)
})