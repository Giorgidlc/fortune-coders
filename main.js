let coders = [];
/* let winners = []; */

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
  const listaCoders = document.querySelector(".coders__contentListCoders-listCoders");
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