const {
    getAll,
    getOne,
    addQuote,
    updateQuote,
    deleteQuote
} = require('../controllers/quote.controller')

const route = require('express').Router()

route.get('/', getAll)
route.get('/:id', getOne)
route.post('/', addQuote)
route.put('/:id', updateQuote)
route.delete('/:id', deleteQuote)


module.exports = route