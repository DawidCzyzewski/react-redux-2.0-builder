import { createSlice } from "@reduxjs/toolkit";
// import { tasksInitialState } from "./reducer";
// import { nanoid } from "nanoid";
import { addTask, fetchTasks, toggleCompleted } from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

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
    [fetchTasks.pending]: handlePending,
    [addTask.pending]: handlePending,
    [toggleCompleted.pending]: handlePending,
    [fetchTasks.rejected]: handleRejected,
    [addTask.rejected]: handleRejected,
    [toggleCompleted.rejected]: handleRejected,
    [fetchTasks.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [addTask.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [toggleCompleted.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        (task) => task.id === action.payload.id
      );
      state.items[index].completed = !state.items[index].completed;
    },
  },
});

// put changing element and when there is no element for example Tomek, it will add this and PATCH when there is no element won't add this, just leave (change nothing)

// export const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;

// export const { fetchingInProgress, fetchingError, fetchingSuccess } =
//   tasksSlice.actions;
