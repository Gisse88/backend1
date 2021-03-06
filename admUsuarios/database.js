const mysql = require('mysql2')

const connection = mysql.createConnection({
    host:'localhost',
    port:3306,
    user:'root',
    password:'qwerty',
    database:'AdmUsuarios'
})

// Encapsulando con promesas:
function query(sql,data){
   /* console.log("Database");
    console.log(sql);
    console.log(data);*/
    return new Promise((resolve,reject)=>{
        connection.query(sql,data,function(error,result){
            //Error first callback
            if(error){
                reject(error.sqlMessage)
            }else{
                resolve(result)
            }
        })
    })
}

async function insert(tableName,data){
    try{
        await query(`INSERT INTO ${tableName}(??) VALUES(?)`,[Object.keys(data),Object.values(data)])
        return {data,success:true}
    }catch(error){
        return {error,success:false}
    }
}

//No podemos usar delete: palabra reservada
async function del(tableName,data){
    try{
        await query(`DELETE FROM ${tableName} WHERE idusuario=?`,[data]) 
        return data
    }catch(error){
        return error
    }
}

//----- FALTA PROBAR 
async function upd(tableName,data){
    try{
        await query(`UPDATE ${tableName} SET ? WHERE idusuario=?`,[data])
        return data
    }catch(error){
        return error
    }
}

async function readData(tableName){
    try{
        const data =  await query(`SELECT * FROM ${tableName}`)
        return data
    }catch(error){
        return error
    }
}

async function readId(tableName,data){
    try{
        await query(`SELECT * FROM ${tableName} WHERE idUsuario=?`,[data])
        return data
    }catch(error){
        return error
    }
}

// Exportamos un objeto
module.exports = {query,insert,del, upd}
