const axios                 = require('axios')
const Dev                   = require('../models/Dev')
const parseStringAsArray    = require('../utils/parseStringAsArray')

module.exports = {
    // Buscar
    async index(request, response){
        const devs = await Dev.find();

        return response.json(devs)
    },

    // Criar
    async store(request, response) {
        const { github_username, techs, latitude, longitude } = request.body
        
        let dev = await Dev.findOne({ github_username })

        if(!dev){
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`)
    
            const { name = login, avatar_url, bio } = apiResponse.data
        
            techArray = parseStringAsArray(techs)
        
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            }
        
            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techArray,
                location,
            })
        }
    
        return response.json(dev)
    },

    //update
    async update(request, response){
        const { github_username, techs, latitude, longitude } = request.body

        let dev = await Dev.findOne({ github_username })

        if(dev){
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`)
    
            const { name = login, avatar_url, bio } = apiResponse.data
        
            techArray = parseStringAsArray(techs)

            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            }
        
            dev = await Dev.update({
                name,
                avatar_url,
                bio,
                techs: techArray,
                location,
            })

        }

        return response.json(dev)
    },

    //destroy
    async delete(request, response){

        const github_username = request.body

        //let dev = await Dev.findOne({ github_username })

        //if(dev){

            //const result = await Dev.deleteOne({_id: dev.id })
                        
         
        //}

        return response.json(github_username)

    }

}