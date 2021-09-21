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
            let parrafo = document.createElement('p'); //<p></p>
            // pase 3 - agregar datos al elemento creado
            parrafo.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, dolorum omnis. Asperiores dolor nam, blanditiis cum atque assumenda! Quas rerum harum fugit ullam cumque voluptatem quaerat nam quia doloremque non eligendi facilis voluptatum, corporis aut. Repellendus modi saepe minus quia unde aliquam sapiente accusamus aperiam suscipit amet, molestiae numquam explicabo?';
            parrafo.className = 'lead';
            console.log(articulos[1].children[1]);
            // paso 4 - unir el elemento padre con el nodo hijo
            // articulos[1].appendChild(parrafo); //agrega nodos hijos al final
            articulos[1].insertBefore(parrafo, articulos[1].children[2]);
           
            boton.innerHTML = 'Ocultar';
            boton.className = 'btn btn-outline-danger';
    }else{
        console.log('aqui quiero eliminar el elemento hijo');
    }


  
}