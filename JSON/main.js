let coders = [];
let winners = [];

function addCoders() {
  const coder = document.getElementById("name").value;
  if (coder.trim() !== "") {
    if (!coders.includes(coder) && !winners.includes(coder)) {
      coders.push(coder);
      updateCodersList(); // Actualizar la lista de coders
    } else {
    alert("El coder ya existe en la lista");
    }
    document.getElementById("name").value = "";
  }
}

function deleteCoder(index) {
  coders.splice(index, 1);
  updateCodersList(); // Actualizar la lista de coders
}

function updateCodersList() {
  const listCoders = document.querySelector(".coders__contentListCoders-listCoders");
  listCoders.innerHTML = ""; // Limpiar la lista antes de actualizarla

  for (let i = 0; i < coders.length; i++) {
    const coder = coders[i];
    const list = document.createElement("li");
    list.textContent = coder;
    const deleteButton = document.createElement("button");
    deleteButton.addEventListener("click", function () {
      deleteCoder(i);
    });
    list.appendChild(deleteButton);
    listCoders.appendChild(list);
    
  }
}

function sortear() { // Función para sortear nombre
  if (coders.length === 0) {
    alert("No hay nombres que sortear");
    return;
  }
  const index = Math.floor(Math.random() * coders.length);
  const winner = coders[index];
  console.log(`Ganador: ${winner}`);
  winners.push(winner);
  window.localStorage.setItem("winner", winner)
  //document.querySelector(".winners__contentListWinners-listWinners").innerHTML += `<li>${winner}</li>`;
  console.log(coders)
  coders.splice(index, 1);
  console.log(coders)
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

const buttonSortear = document.querySelector("button[data-action='sortear']");
buttonSortear.addEventListener("click", sortear);

const buttonResetear = document.querySelector("button[data-action='resetear']");
buttonResetear.addEventListener("click", function () {
  coders = [];
  winners = [];
  document.querySelector(".contentInput__btnAdd").innerHTML = "";
  document.querySelector(".winners__contentListWinners-listWinners").innerHTML = "";
});