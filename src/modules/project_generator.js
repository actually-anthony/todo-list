// update projects with tasks based on UI
// i guess this is more like the inbetween of task and projects

import Project from "./project";
import Task from "./task";

const projects = createDefaultProjects();
const tasks = TESTcreateTodayTasks();

function createDefaultProjects() {
  const default_names = ["Today", "Overdue"];

  // make project classes
  const projects = [];

  default_names.forEach((name) => {
    if (name == "Overdue") {
      projects.push(new Project(name, "2022/12/18"));
    } else {
      projects.push(new Project(name, "2022/12/20"));
    }
  });

  return projects;
}

function TESTcreateTodayTasks() {
  const test_tasks_names = ["first task", "second_task"];

  const tasks = [];

  test_tasks_names.forEach((task_name) => {
    tasks.push(new Task(task_name, "2022/12/20"));
  });

  tasks.push(new Task("Eat oreos", "2022/12/18"));

  return tasks;
}

// put task into appropriate project
function loadTasks() {
  tasks.forEach((task) => {
    projects.forEach((project) => {
      // compare dates
      if (task.dueDate == project.dueDate) {
        project.tasks.push(task);
      }
      // TODO: else to add overdue tasks
    });
  });

  return projects;
}

export { loadTasks };
