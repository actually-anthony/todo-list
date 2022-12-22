export default class Project {
  constructor(name, dueDate = null) {
    this.name = name;
    this.dueDate = dueDate;
    this.tasks = [];
  }

  get unfinished_tasks() {
    const unfinished = this.tasks.filter((task) => {
      return task.finished == false;
    });

    return unfinished.length;
  }
}
