const quote = require('../models/quote.model')

const getAll = async (req, res) => {
    const quotes = await quote.find()
    res.rest.success({data : quotes})
}

const getOne = async (req, res) => {
    const quotes = await quote.findOne({_id : req.params.id})
    res.rest.success({data : quotes})
}

const addQuote = async (req, res) => {
    try {
        const newQuote = new quote({
            name : req.body.name,
            quote : req.body.quote
        })
        await newQuote.save()
        res.rest.success({
            message : 'berhasil menambahkan data',
            data : newQuote
        })
    } catch (error) {
        res.rest.badRequest({
            message : 'gagal menambahkan data',
            error : error
        })
    }
}

const updateQuote = async (req, res) => {
    try {
        const q = await quote.findOne({_id : req.params.id})
        if (req.body.name) q.name = req.body.name
        if (req.body.quote) q.quote = req.body.quote
        await q.save()
        res.rest.success({
            message : 'berhasil mengubah data',
            data : q
        })
    } catch (error) {
        res.rest.badRequest({
            message : 'gagal mengubah data',
            error : error
        })
    }
}

const deleteQuote = async (req, res) => {
    try {
        const q = await quote.findOneAndDelete({_id : req.params.id})
        res.rest.success({message : 'berhasil menghapus data'})
    } catch (error) {
        res.rest.badRequest({
            message : 'gagal menghapus data',
            error : error
        })
    }
}

module.exports = {
    getAll,
    getOne,
    addQuote,
    updateQuote,
    deleteQuote
}