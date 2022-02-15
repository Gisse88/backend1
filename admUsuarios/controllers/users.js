const database = require("../database")
class UserController{
    async create(user){
        const results = await database.insert('usuarios',user)
        console.log(results)
        return results
    }

    async readAll(){
        const users = await database.query(`SELECT * FROM usuarios`)
        console.log(users)
        return users
    }

    async deleteUser(id){
        const results = await database.del('usuarios',id)
        console.log(results)
        return results
    }

}

module.exports = UserController