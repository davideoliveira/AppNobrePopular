const connection = require('../database')

module.exports = {

    async consultaPropaganda(req, resp) {
        try {
            const propagandas = await connection.execute('SELECT * FROM PROPAGANDA')
            console.log(propagandas[0])
            
            return resp.send(propagandas[0])
        } catch (error) {
            return resp.send({errror: error.message})
        }
    }
}