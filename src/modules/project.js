export default class Project {
  constructor(name, dueDate = null) {
    this.name = name;
    this.dueDate = dueDate;
    this.tasks = [];
  }

  unfinished_tasks() {
    return true;
  }
}
