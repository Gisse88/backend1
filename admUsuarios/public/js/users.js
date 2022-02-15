//Armando peticion
// Utilizando fetch
// fetch: Ir y traer algo

//fetch("http://localhost:4000/api/users") //Esto es valido
fetch("/api/users")
    .then(function(respuesta){
        //console.log(respuesta)
        return respuesta.json()
    })
    .then(function(data){
         var users = document.getElementById("users")
        //console.log(data)
        if (data.length ===0){
            users.innerHTML = users.innerHTML + `<div class="users_title">
                <h2>No hay usuarios registrados</h2>
            </div>`
        } else {
            users.innerHTML = users.innerHTML + `<div class="users_title">
                <h2>${data.length} Usuarios registrados</h2>
            </div>`
        }
        for(var user of data){
            users.innerHTML = users.innerHTML + `<div class="user">
                <div class="user__main">
                    <div class="user__pic">
                        <img src="${user.profile_pic}">
                    </div>
                     <div class="user__info">
                        <input type="hidden" name="idSelected" value=${user.idusuario}>
                        <p class="user__name">${user.name}</p>
                        <p class="user__gender">${user.gender}</p>
                        <p class="user__age">${user.age}</p>
                        <p class="user__email">${user.email}</p>
                        <p class="user__profession">${user.profession}</p>
                        <p class="user__salary">${user.salary}</p>
                    </div>
                </div>
                        
                <div class="user__btn">
                    <button class="btn">Editar</button>
                    <button class="btn" onclick="deleteUser(${user.idusuario})">Eliminar</button>
                </div>
                        
            </div>`
            }
        })

       // delete user
       async function deleteUser(id){
            console.log("Quiero eliminar usuario "+id);
            fetch("/api/users/"+id,{
                method: "DELETE",
            })
            .then(function(respuesta){
                //console.log(respuesta)
                location.reload();
                return respuesta.json()
            })
            

    }
       