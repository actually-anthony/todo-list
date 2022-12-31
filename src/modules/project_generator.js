// update default_projects with tasks based on UI

import Project from "./project";
import Task from "./task";

const default_projects = createDefaultProjects();
const tasks = TESTcreateTodayTasks();

function createDefaultProjects() {
  const default_names = ["Today", "Overdue"];

  // make project classes
  const default_projects = [];

  default_projects.push(new Project(default_names[0], "2022/12/20"));
  default_projects.push(new Project(default_names[1], "2022/12/19"));

  return default_projects;
}

function TESTcreateTodayTasks() {
  const test_tasks_names = ["first task", "second_task"];

  const tasks = [];

  test_tasks_names.forEach((task_name) => {
    tasks.push(new Task(task_name, "Today", "2022/12/20"));
  });

  tasks.push(new Task("Eat oreos", "Overdue", "2022/12/19"));

  return tasks;
}

// project that contains all tasks
function loadAllProject() {
  const all_project = new Project("All");

  tasks.forEach((task) => {
    all_project.tasks.push(task);
  });

  default_projects.push(all_project);
}

// put task into appropriate project
function load_default_projects() {
  tasks.forEach((task) => {
    default_projects.forEach((project) => {
      // compare dates
      if (task.origin_project == project.name) {
        project.tasks.push(task);
      }
      // TODO: else to add overdue tasks
    });
  });

  loadAllProject();

  return default_projects;
}

export { load_default_projects };
