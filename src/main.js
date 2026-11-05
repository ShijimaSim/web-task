import "./style.css";
const link = document.createElement("link");
link.rel = "stylesheet";
link.href = "./style.css";
document.head.appendChild(link);

const toDoList = [
  { name: "riparare la TV", fatto: false },
  { name: "cucinare il pranzo", fatto: false },
  { name: "studiare per l'esame di guida", fatto: false },
  { name: "picchiare anziani fuori dall'italmark", fatto: false }
];

const div_input = document.createElement("div");

const input = document.createElement("input");
input.type = "text";
input.id = "mioInput";
input.placeholder = "Scrivi una nuova task...";

const pulsante = document.createElement("button");
pulsante.textContent = "Aggiungi";
pulsante.addEventListener('click', function() {
    const testoInserito = input.value.trim();
    if (testoInserito !== "") {
        toDoList.push({ name: testoInserito, fatto: false });
        input.value = "";
    } else {
        alert("Inserisci un testo valido prima di procedere.");
    }
    renderList();
});

div_input.append(input, pulsante);
document.body.append(div_input);

function renderList() {
  const ul = document.createElement("ul");

  toDoList.forEach((todo) => {
    const li = document.createElement("li");
    li.textContent = `nome: ${todo.name} — status: ${todo.fatto} `;

    const button = document.createElement("button");
    button.textContent = todo.fatto ? "annulla" : "fatto";

    button.addEventListener("click", () => {
      todo.fatto = !todo.fatto;
      renderList();
    });

    li.append(button);
    ul.append(li);
  });

  document.querySelector("ul")?.remove();
  document.body.append(ul);
  renderTotal();
}

function renderTotal(){
    const p = document.createElement("p");
    const completati = toDoList.filter(n => n.fatto);
    p.textContent = `task completati:  ${completati.length}/${toDoList.length}`;

    document.querySelector("p")?.remove();
    document.body.appendChild(p);
}

renderList();