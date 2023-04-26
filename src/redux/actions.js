// Every action is an object with two elements: type which is string and payload which can be everything. To payload is going callback what we done

import { nanoid } from "nanoid";

// In type I can write what is connected with this action, slash, name of action what you are doing
// const action = {
//     type: "Action type",
//     // payload: "Some payload"
//     payload: {

//     }
// }

// So let's create code to my task menager!

// Wanted actions:
// 1. check as true/false
// 2. delete item
// 3. new task
// 4. change filter status

// 1.
// export const toggleCompleted = {
//   type: "tasks/toggleCompleted",
//   payload: "taskId",
// };

export const toggleCompleted = (taskId) => {
  return {
    type: "tasks/toggleCompleted",
    payload: taskId,
  };
};

// 2.
// export const deleteTask = {
//   type: "tasks/deleteTask",
//   payload: "taskId",
// };

export const deleteTask = (taskId) => {
  return {
    type: "tasks/deleteTask",
    payload: taskId,
  };
};

// 3.
// export const addTask = {
//   type: "tasks/addTask",
//   payload: {
//     id: "generate some id",
//     text: "some text",
//     completed: false,
//   },
// };

export const addTask = (text) => {
  return {
    type: "tasks/addTask",
    payload: {
      id: nanoid(),
      text: text,
      completed: false,
    },
  };
};

// 4.
// export const setStatusFilter = {
//   type: "filters/getStatusFilter",
//   payload: "filter value",
// };

export const setStatusFilter = (value) => {
  return {
    type: "filters/getStatusFilter",
    payload: value,
  };
};
