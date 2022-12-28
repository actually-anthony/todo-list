import {
  populateTaskList,
  erase_task_input,
  updateProjectList,
} from "./interface";
import Task from "./task";

// TODO: Adding new tasks in from the task_header - will have to call interface .js

// press enter on text_input, adds new list

// add to the project
// get current project and new task

function get_all_tasks(projects) {
  let tasks = [];

  // recall: filter returns an array
  const all_project = projects.filter((project) => {
    return project.name == "All";
  })[0];

  // get tasks that were added to 'all'
  const tasks_added_to_all = all_project.tasks.filter((task) => {
    return task.origin_project == "All";
  });

  // add projects task to all but keep origin
  projects.forEach((project) => {
    if (project.name != "All") {
      tasks = tasks.concat(project.tasks);
    }
  });

  tasks = tasks.concat(tasks_added_to_all);

  return tasks;
}

function update_all_project(projects) {
  // remove tasks from all that are from other origin projects but not existing anymore

  // loop through 'all' tasks
  // compare origin with project name
  // if it's not in the

  projects.forEach((project) => {
    if (project.name == "All") {
      project.tasks = get_all_tasks(projects);

      project.tasks.forEach((task) => {});
    }
  });
}

function add_task(project, task) {
  const addedTask = new Task(task, project.name, project.dueDate);
  project.tasks.push(addedTask);
}

function finish_task(project, task_index) {
  project.tasks[task_index].finshed = true;
}

// TODO: Deleting tasks after being checked

// TODO: Adding descriptions to tasks

export { add_task, update_all_project };
