// import { createStore } from "redux";
// import { devToolsEnhancer } from "@redux-devtools/extension";
// import { rootReducer } from "./reducer";

// const enhacer = devToolsEnhancer();

// export const store = createStore(rootReducer, enhacer);

// ----------------------redux abrove-----------
// ----------------------redux toolkit under----

// import { tasksReducer, filtersReducer } from "./reducer";

// Ver for createSlice:
import { filtersReducer } from "./reducer";

import { tasksReducer } from "./taskSlice";
const { configureStore } = require("@reduxjs/toolkit");

// No need to adding enhancer, becouse it's included
// export const store = configureStore({
//   reducer: {
//     tasks: tasksReducer,
//     filters: filtersReducer,
//   },
// });

// Ver for createSlice:
export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});
