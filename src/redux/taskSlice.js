import { createSlice } from "@reduxjs/toolkit";
import { tasksInitialState } from "./reducer";
import { nanoid } from "nanoid";
import { fetchTasks } from "./operations";

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  // reducers: {
  //   // this reducer will be started when I initiate backend request
  //   fetchingInProgress(state, action) {
  //     state.isLoading = true;
  //   },
  //   fetchingSuccess(state, action) {
  //     // I will use immer:
  //     state.isLoading = false;
  //     state.error = null;
  //     state.items = action.payload;
  //   },
  //   fetchingError(state, action) {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //     // I can also clear items here, but now I don't want.
  //   },

  // addTask: {
  //   reducer(state, action) {
  //     state.push(action.payload);
  //   },
  //   prepare(text) {
  //     return {
  //       payload: { text, id: nanoid(), completed: false },
  //     };
  //   },
  // },
  // deleteTask(state, action) {
  //   return state.filter((task) => task.id !== action.payload);
  // },
  // toggleCompleted(state, action) {
  //   for (const task of state) {
  //     if (task.id === action.payload) {
  //       task.completed = !task.completed;
  //     }
  //   }
  // },

  // },
  // extraReducers is for createAsyncThunk
  extraReducers: {
    [fetchTasks.pending](state, action) {
      state.isLoading = true;
    },
    [fetchTasks.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchTasks.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
      state.items = [];
    },
  },
});

// export const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;

// export const { fetchingInProgress, fetchingError, fetchingSuccess } =
//   tasksSlice.actions;
