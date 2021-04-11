const express = require('express')

const routes = express.Router()
const ItemController = require('./controllers/ItemController.js')

routes.get('/items', ItemController.index)
routes.get('/items/:id', ItemController.show)
routes.post('/item', ItemController.store)
routes.put('/item/:id', ItemController.update)
routes.delete('/item/:id', ItemController.destroy)

module.exports = routes