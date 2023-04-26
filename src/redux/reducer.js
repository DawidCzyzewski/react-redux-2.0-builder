import { combineReducers } from "redux";

// It's good practice to start with idea of feature states, which will be changed
// const initialState = {
//   tasks: [
//     {
//       id: 0,
//       text: "Learn HTML and CSS",
//       completed: true,
//     },
//     {
//       id: 1,
//       text: "Get good at JavaScript",
//       completed: true,
//     },
//     {
//       id: 2,
//       text: "Master React",
//       completed: false,
//     },
//     {
//       id: 3,
//       text: "Discover Redux",
//       completed: false,
//     },
//     {
//       id: 4,
//       text: "Build amazing apps",
//       completed: false,
//     },
//   ],
//   filters: {
//     status: "all",
//   },
// };

const tasksInitialState = [
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

const filtersInitialState = {
  status: "Active",
  numberOfClicked: 0,
};

//  createStore have 1, 2 or 3 arguments. First is main reducer, which is responsible for changing status. Later I will write my own reducers.
// Second is preloadState, it should look like my end-status. If I have tasks as array, I should have everywhere array.
// Last thing is enhancer, it's optional and is responsible for adding more actions in my store

// Good practice is writing rootReducer:
// const rootReducer = (state = initialState, action) => {
//   return state;
// };

// // example: type: "filters/setStatusFilter"
// export const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "tasks/ addTask":
//       return {
//         ...state,
//         tasks: [...state.tasks, action.payload],
//       };
//     case "filters/setStatusFilter":
//       return {
//         ...state,
//         filters: {
//           ...state.filters,
//           status: action.payload,
//         },
//       };
//     default:
//       return state;
//   }
// };

export const tasksReducer = (state = tasksInitialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const filtersReducer = (state = filtersInitialState, action) => {
  switch (action.type) {
    case "filters/setStatusFilter":
      return {
        // ...state,
        // filters: {
        //   ...state.filters,
        //   status: action.payload,
        // },

        // If I use this, I'm one level in, so I don't use "filters"

        ...state,
        status: action.payload,
      };

    default:
      return state;
  }
};

// export const rootReducer = (state = {}, action) => {
//   return {
//     tasks: tasksReducer(state.tasks, action),
//     filters: filtersReducer(state.filters, action),
//   };
// };

// instead of writing this I can use combineReducers
export const rootReducer = combineReducers({
  tasks: tasksReducer,
  filters: filtersReducer,
});
