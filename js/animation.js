const btnclick = document.querySelectorAll('.boton');
const btndiv = document.querySelector('.cerrar');
const modal = document.querySelector('.modal');
const modalconten = document.querySelector('.modal-container');

let muestremenu = false;
let botonList =[];
let counter =0;
let cerrarmodal= false;
//agrego los botones en un vector
btnclick.forEach(function(evento){
	botonList.push(evento);
      });	console.log(botonList);


//add la clase show 
btnclick.forEach(function(evento){
	evento.addEventListener("click", function(llamada){
          modal.classList.add("mostrar-modal"); //add la clase show
          modalconten.classList.add('mostrar-container-modal');
	  });
});

//removiendo la clase modal
btndiv.addEventListener('click', togglemodal);
function togglemodal(){

console.log("cerrar");
	if(!cerrarmodal){
        modal.classList.remove('mostrar-modal');
        modalconten.classList.remove('mostrar-container-modal');
		cerrarmodal = true;
	}else{
		cerrarmodal = false;
	}
}


