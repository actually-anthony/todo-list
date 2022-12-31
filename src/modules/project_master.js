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

// from 'All' project not all projects
function update_all_project(projects) {
  // remove tasks from all that are from other origin projects but not existing anymore

  // loop through 'all' tasks
  // compare origin with project name
  // if it's not in the

  projects.forEach((project) => {
    if (project.name == "All") {
      project.tasks = get_all_tasks(projects);
    }
  });
}

function add_task(project, task) {
  const addedTask = new Task(task, project.name, project.dueDate);
  project.tasks.push(addedTask);
}

function finish_task(active_project, projects, task_index) {
  if (active_project.name == "All") {
    let task = active_project.tasks[task_index];

    active_project.tasks.splice(task_index, 1);

    if (task.origin_project != "All") {
      // new all project
      projects.forEach((p) => {
        // select the correct corresponding project
        if (p.name == task.origin_project) {
          p.tasks.forEach((t, i) => {
            if (t === task) {
              p.tasks.splice(i, 1);
            }
          });
        }
      });
    }
  } else {
    active_project.splice(task_index, 1);
  }
}

// TODO: Adding descriptions to tasks

export { add_task, update_all_project, finish_task };
