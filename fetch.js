
const url = "https://jsonplaceholder.typicode.com/users"
document.addEventListener("DOMContentLoaded", function(){
 const formulario = document.getElementById("formulario");


       formulario.addEventListener("click", function(ev){
       ev.preventDefault();
  

    const nombre= document.getElementById("Nombre").value;
    const apellido= document.getElementById("Apellido").value;
    const fecha= document.getElementById("Fecha").value;
    
    const usuario={nombre:"",
    apellido:"",
    fecha:""}    

    usuario.nombre=nombre;
    usuario.apellido=apellido;
    usuario.fecha=fecha;

    fetch(url, {
        method: "POST", 
        body: JSON.stringify({
            usuario,
        }),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
          },
        
    })
    .then(res => res.json())
    .then(response => console.log(usuario,response))
    .catch(error => console.error("Error",error))
 })
})
  