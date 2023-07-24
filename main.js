let coders = [];
let winners = [];

function addCoders() {
  const coder = document.getElementById("name").value;
  if (coder.trim() !== "") {
    coders.push(coder);
    updateCodersList(); // Actualizar la lista de coders
    document.getElementById("name").value = "";
  }
}

function deleteCoder(index) {
  coders.splice(index, 1);
  updateCodersList(); // Actualizar la lista de coders
}

function updateCodersList() {
  const listaCoders = document.querySelector(".listaCoders");
  listaCoders.innerHTML = ""; // Limpiar la lista antes de actualizarla

  for (let i = 0; i < coders.length; i++) {
    const coder = coders[i];
    const li = document.createElement("li");
    li.textContent = coder;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Eliminar";
    deleteButton.addEventListener("click", function () {
      deleteCoder(i);
    });
    li.appendChild(deleteButton);
    listaCoders.appendChild(li);
  }
}

function sortear() {
  if (coders.length === 0) {
    alert("No hay nombres que sortear");
    return;
  }
  const index = Math.floor(Math.random() * coders.length);
  const winner = coders[index];
  console.log(`Ganador: ${winner}`);
  winners.push(winner);
  document.querySelector(".listaWinners").innerHTML += `<li>${winner}</li>`;
  coders.splice(index, 1);
  updateCodersList(); // Actualizar la lista de coders después de sortear
  return winner;
};

const buttonSortear = document.querySelector("button[data-action='sortear']");
buttonSortear.addEventListener("click", sortear);

const buttonResetear = document.querySelector("button[data-action='resetear']");
buttonResetear.addEventListener("click", function () {
  coders = [];
  winners = [];
  document.querySelector(".listaCoders").innerHTML = "";
  document.querySelector(".listaWinners").innerHTML = "";
});