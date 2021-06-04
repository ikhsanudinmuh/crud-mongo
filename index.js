const express = require('express')
const restResponse = require('express-rest-response')

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


