const { Router }        = require('express')
const routes            = Router()
const DevController     = require('./controllers/DevController')
const SearchController  = require('./controllers/SearchController')

//INSERT
routes.post('/devs', DevController.store)
//UPDATE
routes.put('/devs', DevController.update)
//SELECT
routes.get('/devs', DevController.index)
//SEARCH SELECT
routes.get('/search', SearchController.index)
//DELETE
routes.delete('/devs', DevController.delete)


module.exports = routes;

// Métodos Http: get, post, put, delete

// Tipos de parâmetros: 

// Query parms: request.query (Filtros, Ordenação, paginação, ...)  GET
// Route parms: request.params (Identificar um recurso na alteração ou remoção) PUT, DELETE
// Body: Json utilizado no POST