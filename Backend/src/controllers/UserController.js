const responseModel = {
    sucess: false,
    data:[],
    error: []
}

module.exports = {
    
    
    async createUser(req,resp) {
        const response = {...responseModel}

        return resp.json(response)
    },

    async login(req, resp) {
        const response = {...responseModel}

        return resp.json(response)
    }
}