function task_header(project) {
  const header = document.createElement("div");
  header.classList.add("task_header");

  const title = document.createElement("div");
  title.innerText = project.name;
  title.classList.add("title");

  header.appendChild(title);

  var input = document.createElement("INPUT");
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", `Add task to "${project.name}"`);

  header.appendChild(input);

  return header;
}

export { task_header };
