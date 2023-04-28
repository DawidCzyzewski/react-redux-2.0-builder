// import { createStore } from "redux";
// import { devToolsEnhancer } from "@redux-devtools/extension";
// import { rootReducer } from "./reducer";

// const enhacer = devToolsEnhancer();

// export const store = createStore(rootReducer, enhacer);

// ----------------------redux abrove-----------
// ----------------------redux toolkit under----
import { tasksReducer, filtersReducer } from "./reducer";
const { configureStore } = require("@reduxjs/toolkit");

// No need to adding enhancer, becouse it's included
export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});
