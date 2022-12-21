class Project {
  constructor(name, date = null) {
    this.name = name;
    this.date = date;
    this.tasks = [];
  }
}

const default_names = ["Today", "Overdue"];

function createDefaultProjects() {
  // make project classes
  const projects = [];

  default_names.forEach((name) => {
    projects.push(new Project(name));
  });

  return projects;
}

export { createDefaultProjects };
