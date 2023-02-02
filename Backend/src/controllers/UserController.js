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
            const [userbd] = await connection.execute(`select * from usuario where username = '${username}';`)

            if(username == userbd[0].username && senha == userbd[0].senha){
                return resp.send({auth: true, username: username, msg: 'Acesso autorizado'})
            }else {
                return resp.send({auth: false, username: username, msg: 'Acesso negado'})
            }

        }catch(error){
            return resp.send({ erro: error.message})
        }
    }
}