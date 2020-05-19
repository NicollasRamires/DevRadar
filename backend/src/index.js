const express   = require('express')
const mongoose  = require('mongoose')
const cors      = require('cors')
const routes    = require('./routes')

const app = express()

mongoose.connect('mongodb+srv://Nicollas:36625242@mycluster-rx10y.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(cors({ origin: 'http://localhost:3000' })) //liberar acesso apenas a aplicação react
app.use(express.json()) //habilitar json 
app.use(routes)

app.listen(3333) // rodar aplicação utilizando porta específica 3333 ou outra
