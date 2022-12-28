export default class Task {
  constructor(
    title,
    origin_project,
    dueDate = null,
    finished = false,
    description = null,
    priority = null
  ) {
    this.title = title;
    this.origin_project = origin_project;
    this.dueDate = dueDate;
    this.finished = finished;
    this.description = description;
    this.priority = priority;
  }
}
