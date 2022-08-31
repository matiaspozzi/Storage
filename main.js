AOS.init()



class servicio{
    constructor(Servicio, precio){
        this.Servicio = Servicio.toLowerCase();
        this.precio = precio;
    }
}

let section = document.getElementById("sectionServices")

let miCarrito = []
if(localStorage.getItem("miCarrito")){
    miCarrito = JSON.parse(localStorage.getItem('miCarrito')) || []
// cargo los servicios abandonados a la tabla
}


const services = [
    { 
        id: "1",
        servicio: "Diseño y maquetacion de sitio responsivo",
        precio: 70000
    },
    {
        id: "2",
        servicio: "Diseño y maquetacion de sitio HTML5 y CSS3",
        precio: 70000
    },
    {
        id: "3",
        servicio: "Banners animados", 
        precio: 20000
    },
    {   
        id: "4",
        servicio: "Galeria de imagenes",
        precio: 7000
    },
    {
        id: "5",
        servicio: "Formulario web",
        precio: 5000
    },
    {    
        id: "6",
        servicio:"SEO",
        precio: 15000
    }
]



 
    
//declaro la variable que almacenara el total de mi carrito

let totalCarrito = 0;



// inyecto las cards   
renderizarProductos();



function renderizarProductos () {
    for (const service of services){
        section.innerHTML+= `<div class="col-md-3" list-group-item"> 
        <h5> ID: ${service.id}
        <h6 class="card-title">${service.servicio}</h6>
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
    Swal.fire(
        "Producto: "+service.servicio,
        "Agregado al carrito",
        "success"
    )
    document.getElementById("tableBody").innerHTML+=`
    <tr>
        <td>${service.id}</td>
        <td>${service.servicio}</td>
        <td>${service.precio}</td>
        <td>
            <a href="#" class="borrar-producto fas fa-times-circle" data-id="${service.id}"></a>
        </tf>
        </tr>`
  ;
    localStorage.setItem("miCarrito",JSON.stringify(miCarrito));


//borrar productos del carrito



}
    let vaciarCompra = document.getElementById("buttonFinalizarCompra")
        buttonFinalizarCompra.addEventListener("click", () => {
        
        console.log(totalCarrito= miCarrito.map (miCarrito => miCarrito.precio),
        checkOut = totalCarrito.reduce ((ac,el) => ac + el,0),
        console.log(miCarrito));


            localStorage.removeItem("miCarrito",JSON.stringify(miCarrito));
            
     
        })
    

        
    //fetch

    

    function obtengoJson(){
         const URLJSON="/fetch.json";
         fetch(URLJSON)
            .then( resp => resp.json())
            .then( data =>{
                console.log(data);
            })
    }

    obtengoJson()

