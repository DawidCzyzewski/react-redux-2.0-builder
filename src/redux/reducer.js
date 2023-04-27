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

// Use initialState as default state value
// export const rootReducer = (state = initialState, action) => {
//   // The reducer distinguishes between actions by the value of the type property
//   switch (action.type) {
//     // Depending on the type of action, different logic will be executed
//     default:
//       // Each reducer receives all actions sent to the store.
//       // If the reducer should not process some type of action,
//       // must return the existing state unchanged.
//       return state;
//   }
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

// "tasks/addTask"
// const rootReducer = (state = initialState, action) => {
//   // Reducer realizuje akcje po wartości właściwości type
//   switch (action.type) {
//     // W zależności od rodzaju akcji będzie się wykonywała inna logika
//     case "tasks/addTask": {
//       // Należy zwrócić nowy obiekt statusu
//       return {
//         // w którym są wszystkie dane istniejącego statusu
//         ...state,
//         // i nowa tablica zadań
//         tasks: [
//           // w której są wszystkie istniejące zadania
//           ...state.tasks,
//           // i obiekt nowego zadania
//           action.payload,
//         ],
//       };
//     }
//     default:
//       // Każdy reducer otrzymuje wszystkie akcje wysłane do store.
//       // Jeśli reducer nie powinien opracowywać jakiegoś typu akcji,
//       // należy zwrócić istniejący status bez zmian.
//       return state;
//   }
// };

// End code:
// export const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "tasks/addTask":
//       return { ...state, tasks: [...state.tasks, action.payload] };
//     case "tasks/deleteTask":
//       return {
//         ...state,
//         tasks: state.tasks.filter((task) => task.id !== action.payload),
//       };
//     default:
//       return state;
//   }
// };

// The same in functions:

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

// //  Kod reducerów tasksReducer i filtersReducerexport
// const rootReducer = (state = {}, action) => {
//   // Zwracamy obiekt statusu
//   return {
//     // Obu reducerom przekazujemy tylko tę część statusu, za którą odpowiadają
//     tasks: tasksReducer(state.tasks, action),
//     filters: filtersReducer(state.filters, action),
//   };
// };

// instead of writing this I can use combineReducers
export const rootReducer = combineReducers({
  tasks: tasksReducer,
  filters: filtersReducer,
});
