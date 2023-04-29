import { createSlice } from "@reduxjs/toolkit";
import { tasksInitialState } from "./reducer";
import { nanoid } from "nanoid";

export const tasksSlice = createSlice({
  // name is a name of our slice:
  name: "tasks",
  initialState: tasksInitialState,
  reducers: {
    //if I had installed immer, I can copy from reducer 1:1
    // addTask(state, action) {
    //   state.push(action.payload);
    // },
    // If I have more info about element, like in addTask, I can create object with reducer (the same as abrove) and prepare (copied from actions)
    addTask: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(text) {
        return {
          payload: { text, id: nanoid(), completed: false },
        };
      },
    },
    deleteTask(state, action) {
      return state.filter((task) => task.id !== action.payload);
    },
    toggleCompleted(state, action) {
      for (const task of state) {
        if (task.id === action.payload) {
          task.completed = !task.completed;
        }
      }
    },
  },
});

// tasksSlice.actions
// tasksSlice.getInitialState
// tasksSlice.reducer
// tasksSlice.addTask

// If I go my mouse on one of elements in line under, I will see that for example addTask has name tasks/addTask
export const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
