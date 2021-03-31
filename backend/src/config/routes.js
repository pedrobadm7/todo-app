const express = require('express')

module.exports = function(server) {

        //API Routes
        const router = express.Router()
        server.use('/api', router) //Sempre que estiver com .use() é um midware

        //TODO Routes
        const todoService = require('../api/todo/todoService')
        todoService.register(router, '/todos')
}