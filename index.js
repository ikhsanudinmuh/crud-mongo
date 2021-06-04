const express = require('express')
const restResponse = require('express-rest-response')
const mongoose =  require('mongoose')

const connectionString = 'mongodb+srv://admin:admin@cluster0.klz2w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const app = express()
const options = {
    showStatusCode : true,
    showDefaultMessage : true
}

app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(restResponse(options))

app.get('/', (req, res) => {
    console.log('hello world')
})

app.use('/quotes', require('./routes/quote.route'))

mongoose
    .connect(connectionString, {useNewUrlParser : true, useUnifiedTopology : true})
    .then(() => {
        app.listen(3000, console.log('Connected to port 3000'))
        console.log('Connected to database')
    })

