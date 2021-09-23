function cambiarTitulo(){
    console.log('desde la funcion cambiar titulo');
    // traer elemento del html- opcion 1con metodo querySelector
    // let titulo = document.querySelector('#tituloPrincipal');
    
    // traer elemento del html- opcion 2 con metodo getElementBy---
    // getElementById('un id de html')
    // getElementByClassName('una clase de html')
    // getElementByTagName('una etiqueta de html')

    let titulo = document.getElementById('tituloPrincipal');
    console.log(titulo.className);
    titulo.className = 'text-primary display-2'
}

function verMas(){
    console.log('desde de la funcion ver mas');
    let boton = document.getElementById('btnVerMas');
    
    // paso 1 - buscar el padre
    let articulos = document.getElementsByTagName('article');
    console.log(articulos[1]);

    if(boton.innerHTML == 'Ver mas...'){
            // paso 2 - crear el elemento <p>
            // Forma 1
            // let parrafo = document.createElement('p'); //<p></p>
            // // pase 3 - agregar datos al elemento creado
            // parrafo.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, dolorum omnis. Asperiores dolor nam, blanditiis cum atque assumenda! Quas rerum harum fugit ullam cumque voluptatem quaerat nam quia doloremque non eligendi facilis voluptatum, corporis aut. Repellendus modi saepe minus quia unde aliquam sapiente accusamus aperiam suscipit amet, molestiae numquam explicabo?';
            // parrafo.className = 'lead';
            // console.log(articulos[1].children[1]);
            // // paso 4 - unir el elemento padre con el nodo hijo
            // // articulos[1].appendChild(parrafo); //agrega nodos hijos al final
            // articulos[1].insertBefore(parrafo, articulos[1].children[2]);

            // Forma 2
            articulos[1].innerHTML += '<p class="lead">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores tempora rem velit minima fugiat in libero cupiditate totam eaque ipsam nulla qui consequatur praesentium aliquid impedit commodi corrupti, quaerat consectetur quia omnis soluta numquam. Magnam explicabo, odit laudantium nulla eos dolorem dolores eius earum sed quis vel aliquam totam mollitia!</p>';

            boton.innerHTML = 'Ocultar';
            boton.className = 'btn btn-outline-danger';
    }else{
        console.log('aqui quiero eliminar el elemento hijo');
        console.log(articulos[1].children[2]);
        console.log(articulos[1].hasChildNodes());
        if(articulos[1].hasChildNodes() && articulos[1].children.length > 2){
            // borrar un nodo hijo
            articulos[1].removeChild(articulos[1].children[2]);
            boton.innerHTML = 'Ver mas...';
            boton.className = 'btn btn-outline-primary';
        }
    }  
}