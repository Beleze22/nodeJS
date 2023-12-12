import express from 'express'// Importando o EXPRESS pois precisamos dele para criar baseado nele
import rotasBasico from "./routes/basico"
import rotasDiferentesRetornos from "./routes/diferentesRetornos"
import rotasAninhadas from "./routes/rotasAninhadas"

// Criando o APP utilizando a função construtiva do express
const app = express()

// Definindo a porta que a aplicação vai rodar
const porta = 8080

//middleware
// app.use((req, res, next) => {
//     console.log(`Data: ${Date.now()}`)
//     next()
// })

app.use(rotasBasico)
app.use(rotasDiferentesRetornos)
app.use("/produtos", rotasAninhadas)

// Aplicativo fique escutando na porta 8080, esperando alguma requisição
app.listen(porta, () => {
    console.log('Servidor rodando!')
})