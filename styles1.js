const personas = [];
const ganadores = [];


function agregarPersona (){
    let nombre = document.getElementById("input_name").value;
    personas.push(nombre); //agrega elementos con el input
    console.log(nombre);

    let ul= document.getElementById ("participantes") //lista creada en html
    let itemlista = document.createElement('li');
    itemlista.textContent = nombre;
    ul.appendChild (itemlista);

    document.getElementById("input_name").value = "";

}

function sorteo(){
    console.log(personas);
    let sorteado = getRandomInt(personas.length);
    console.log (sorteado);
    let ganador= personas[sorteado];
    console.log(ganador);
    ganadores.push (ganador); //para agregar un ganador
    personas.splice(sorteado); //para eliminar un elemento del array
    console.log(personas);
    console.log(ganadores);
    let listaDeGanadores = document.getElementById ("listaParticipantesSorteados")
    let listaSorteados = document.createElement ("li");
    listaSorteados.textContent = ganador;
    listaDeGanadores.appendChild (listaSorteados);
    
}

function reset () {
    personas = [];
    ganadores = [];
    let listaDeGanadores = document.getElementById ("listaParticipantesSorteados");
    listaDeGanadores.removeChild ();
    let listaParticipantes= document.getElementById ("participantes");
    listaParticipantes.removeChild ();
    
}



function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }