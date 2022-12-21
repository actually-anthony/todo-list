export default class Task {
  constructor(
    title,
    dueDate = null,
    finished = false,
    description = null,
    priority = null
  ) {
    this.title = title;
    this.dueDate = dueDate;
    this.finished = finished;
    this.description = description;
    this.priority = priority;
  }
}
