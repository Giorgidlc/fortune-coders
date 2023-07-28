let coders = [];
let winners = [];


let winner = window.localStorage.getItem("winner")
document.querySelector(".winners__contentListWinners-listWinners").innerHTML += `<li>${winner}</li>`;


function sortear() { // Función para sortear nombre
  if (coders.length === 0) {
    alert("No hay nombres que sortear");
    return;
  }
  const index = Math.floor(Math.random() * coders.length);
  const winner = coders[index];
  console.log(`Ganador: ${winner}`);
  winners.push(winner);
  coders.splice(index, 1);
  updateCodersList(); // Actualizar la lista de coders después de sortear
  updateWinnersList();
  return winner;
};

function deleteWinner(index) {
  winners.splice(index, 1);
  updateWinnersList(); // Actualizar la lista de coders
}
function updateWinnersList() {
  const listaWinners = document.querySelector(".winners__contentListWinners-listWinners");
  listaWinners.innerHTML = ""; // Limpiar la lista antes de actualizarla

  for (let i = 0; i < winners.length; i++) {
    const winner = winners[i];
    const li = document.createElement("li");
    li.textContent = winner;
    const deleteButton = document.createElement("button");
    deleteButton.addEventListener("click", function () {
      deleteWinner(i);
    });
    li.appendChild(deleteButton);
    listaWinners.appendChild(li);
    
  }
}

/* const buttonSortear = document.querySelector("button[data-action='sortear']");
buttonSortear.addEventListener("click", sortear); */

const buttonResetear = document.querySelector("button[data-action='resetear']");
buttonResetear.addEventListener("click", function () {
  coders = [];
  winners = [];
  document.querySelector(".contentInput__btnAdd").innerHTML = "";
  document.querySelector(".winners__contentListWinners-listWinners").innerHTML = "";
});