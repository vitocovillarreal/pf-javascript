const urlUsuarios = "http://jsonplaceholder.typicode.com/users";
const listaUsuarios = document.querySelector("#lista-usuarios")

fetch(urlUsuarios)
    .then(  (Response) => Response.json() )
    .then(  (data) => {
        data.forEach(usuario => {
                const li = document.createElement("li");
                li.textContent = usuario.name;
                listaUsuarios.append(li);
        })
    })