const connection = require('../database')

const responseModel = {
    username: '',
    nome: '',
    email: '',
    senha: '',
}

module.exports = {
    
    
    async createUser(req,resp) {
        try{
            const response = {...responseModel}
            
            const {username, nome, email, senha } = req.body
            response.username = username
            response.nome = nome
            response.email = email
            response.senha = senha

            return resp.send({ response })
            

        } catch(error) {
            return resp.send({ erro: error.message})
        }
    },

    async login(req, resp) {
        try{
            const response = {...responseModel}
    
            const {username, senha } = req.body
    
            if (username == 'davisa1' && senha == '1234'){
                return resp.json({msg: 'Acesso autorizado'})
            }else{
                return resp.json({msg: 'Acesso negado'})
            }


        }catch(error){
            return resp.send({ erro: error.message})
        }
    }
}