// // import { nanoid } from "nanoid";

// // export const toggleCompleted = (taskId) => {
// //   return {
// //     type: "tasks/toggleCompleted",
// //     payload: taskId,
// //   };
// // };

// // export const deleteTask = (taskId) => {
// //   return {
// //     type: "tasks/deleteTask",
// //     payload: taskId,
// //   };
// // };

// // export const addTask = (text) => {
// //   return {
// //     type: "tasks/addTask",
// //     payload: {
// //       id: nanoid(),
// //       completed: false,
// //       text,
// //     },
// //   };
// // };

// // export const setStatusFilter = (value) => {
// //   return {
// //     type: "filters/setStatusFilter",
// //     payload: value,
// //   };
// // };

// // ----------------------redux abrove-----------
// // ----------------------redux toolkit under----

// commented becuse of createSlice:

import { createAction, nanoid } from "@reduxjs/toolkit";

// export const toggleCompleted = createAction("tasks/toggleCompleted");
// // console.log("toggleCompleted.type in actions: ", toggleCompleted.type);
// // console.log("toggleCompleted.toString() in actions: ", toggleCompleted.toString());

// // export const addTask = createAction("tasks/addTask");
// // second argument is prepareAction, it's function
// // createAction(type, prepareAction)
// export const addTask = createAction("tasks/addTask", (text) => {
//   return { payload: { text, id: nanoid(), completed: false } };
// });

// export const deleteTask = createAction("tasks/deleteTask");

export const setStatusFilter = createAction("filters/setStatusFilter");
