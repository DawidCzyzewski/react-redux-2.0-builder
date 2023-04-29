// import { combineReducers } from "redux";
// import { statusFilters } from "./constants";

// const tasksInitialState = [
//   {
//     id: 0,
//     text: "Learn HTML and CSS",
//     completed: true,
//   },
//   {
//     id: 1,
//     text: "Get good at JavaScript",
//     completed: true,
//   },
//   {
//     id: 2,
//     text: "Master React",
//     completed: false,
//   },
//   {
//     id: 3,
//     text: "Discover Redux",
//     completed: false,
//   },
//   {
//     id: 4,
//     text: "Build amazing apps",
//     completed: false,
//   },
// ];

// const filtersInitialState = {
//   status: statusFilters.all,
// };

// const tasksReducer = (state = tasksInitialState, action) => {
//   switch (action.type) {
//     case "tasks/addTask":
//       return [...state, action.payload];
//     case "tasks/deleteTask":
//       return state.filter((task) => task.id !== action.payload);
//     case "tasks/toggleCompleted":
//       return state.map((task) => {
//         if (task.id !== action.payload) {
//           return task;
//         }
//         return { ...task, completed: !task.completed };
//       });
//     default:
//       return state;
//   }
// };

// // export
// const filtersReducer = (state = filtersInitialState, action) => {
//   switch (action.type) {
//     case "filters/setStatusFilter":
//       return {

//         ...state,
//         status: action.payload,
//       };

//     default:
//       return state;
//   }
// };

// export const rootReducer = combineReducers({
//   tasks: tasksReducer,
//   filters: filtersReducer,
// });

// ----------------------redux abrove-----------
// ----------------------redux toolkit under----

// In toolkit I don't need combine reducer, I export func
import { createReducer } from "@reduxjs/toolkit";
import {
  deleteTask,
  setStatusFilter,
  toggleCompleted,
  addTask,
} from "./actions";
import { statusFilters } from "./constants";

export const tasksInitialState = [
  {
    id: 0,
    text: "Learn HTML and CSS",
    completed: true,
  },
  {
    id: 1,
    text: "Get good at JavaScript",
    completed: true,
  },
  {
    id: 2,
    text: "Master React",
    completed: false,
  },
  {
    id: 3,
    text: "Discover Redux",
    completed: false,
  },
  {
    id: 4,
    text: "Build amazing apps",
    completed: false,
  },
];

// I comment it to createSlice, uncomment if createAction
// export const tasksReducer = createReducer(tasksInitialState, {
//   [addTask]: (state, action) => {
//     // return [...state, action.payload];

//     // And after install immer I can write like this:
//     state.push(action.payload);
//   },
//   [toggleCompleted]: (state, action) => {
//     // return state.map((task) => {
//     //   if (task.id !== action.payload) {
//     //     return task;
//     //   }
//     //   return { ...task, completed: !task.completed };
//     // });

//     // And after install immer I can write like this:
//     for (const task of state) {
//       if (task.id === action.payload) {
//         task.completed = !task.completed;
//       }
//     }
//   },
//   [deleteTask]: (state, action) => {
//     return state.filter((task) => task.id !== action.payload);

//     // And after install immer I can write like this but in this case it's worst than without:
//     // const index = state.findIndex((task) => task.id === action.payload);
//     // state.splice(index, 1);
//   },
// });

const filtersInitialState = {
  status: statusFilters.all,
};

export const filtersReducer = (state = filtersInitialState, action) => {
  switch (action.type) {
    case setStatusFilter.type:
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};
