class Serv{
    constructor(Servicio, precio){
        this.Servicio = Servicio.toLowerCase();
        this.precio = precio;
    }
}


const Servicios = []


const Services = [
    {
        id: 1,
        servicio: "Diseño y maquetacion de sitio responsivo",
        precio: 70000
    },
    {
        id: 2,
        servicio: "diseño y maquetacion de sitio HTML5 y CSS3",
        precio: 70000
    },
    {
        id: 3,
        servicio: "banners animados",
        precio: 20000
    },
    {   
        id: 4,
        servicio: "galeria de imagenes",
        precio: 7000
    },
    {
        id: 5,
        servicio: "formulario web",
        precio: 5000
    },
    {    
        id: 6,
        servicio:"SEO",
        precio: 15000
    }
]



 
    
// inyecto las cards     

let cardx = document.getElementById("cardx")
for (const carta of Services){
    let cartas = document.createElement("div")
    carta.className="card col-md-3";
    carta.innerHTML=`
    <div class="card-body">
        <h5 class="card-title">${carta.servicio}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${carta.precio}</h6>
        <button id= boton class="btn${carta.id} btn-primary boton">COMPRAR</button>
    </div>
    `;

    cartas.append(carta);

//Eventos Boton

let boton = document.getElementsByClassName(`btn${carta.id}btn-primary boton    `) 

boton.addEventListener("click",(e) => {
e.preventDefault ();
console.log ("Agregaste el producto al carrito")
Servicios.push (cardx);
})

}










    
    

       






