class servicio{
    constructor(Servicio, precio){
        this.Servicio = Servicio.toLowerCase();
        this.precio = precio;
    }
}

let section = document.getElementById("sectionServices")

let miCarrito = []
if(localStorage.getItem("miCarrito")){
    miCarrito=JSON.parse(localStorage.getItem("miCarrito"));
// cargo los servicios abandonados a la tabla
}


const services = [
    { 
        id: 1,
        servicio: "Diseño y maquetacion de sitio responsivo",
        precio: 70000
    },
    {
        id: 2,
        servicio: "Diseño y maquetacion de sitio HTML5 y CSS3",
        precio: 70000
    },
    {
        id: 3,
        servicio: "Banners animados", 
        precio: 20000
    },
    {   
        id: 4,
        servicio: "Galeria de imagenes",
        precio: 7000
    },
    {
        id: 5,
        servicio: "Formulario web",
        precio: 5000
    },
    {    
        id: 6,
        servicio:"SEO",
        precio: 15000
    }
]



 
    
// inyecto las cards     

renderizarProductos();

function renderizarProductos () {
    for (const service of services){
        section.innerHTML+= `<div class="col-md-3" list-group-item"> 
        <h7> ID: ${service.id}
        <h5 class="card-title">${service.servicio}</h5>
        <h6 class="card-subtitle mb-2 text-muted">$ ${service.precio}</h6>
        <button id="btn${service.id}" btn-primary boton">COMPRAR</button> 
    </div>
    `;

    
      
   

 //Eventos Boton
 let boton = document.getElementById(`btn${service.id}`) 
 document.getElementById("boton"), boton.addEventListener("click",() => {
 console.log ("agregaste al carrito")
 miCarrito.push (service);
 })

         

}

services.forEach(service =>{

document.getElementById(`btn${service.id}`).addEventListener("click", function() {
            agregarAlCarrito(service);

 });
})

}


function agregarAlCarrito(service){
    miCarrito.push(service);
    console.log(miCarrito);
    alert("Producto: "+service.servicio+" agregado al carrito")
    document.getElementById("tableBody").innerHTML+=`
    <tr>
        <td>${service.id}</td>
        <td>${service.servicio}</td>
        <td>${service.precio}</td>
    </tr>`
  ;
    localStorage.setItem("miCarrito",JSON.stringify(miCarrito));

}




