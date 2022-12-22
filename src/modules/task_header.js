function task_header(project) {
  const header = document.createElement("div");
  header.classList.add("task_header");

  const title = document.createElement("div");
  title.innerText = project.name;

  header.appendChild(title);

  var x = document.createElement("INPUT");
  x.setAttribute("type", "text");

  header.appendChild(x);

  return header;
}

export { task_header };
