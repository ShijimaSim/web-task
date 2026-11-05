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

  document.body.append(ul);
}