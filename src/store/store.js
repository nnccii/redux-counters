export const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'RESET':
      return 0;
    default:
      return state;
  }
};

export const appStore = (state = [], action) => {
  switch (action.type) {
    case 'INCREMENT':
    case 'DECREMENT':
    case 'RESET':
      return [...state.slice(0, action.index),
        counter(state[action.index], action),
        ...state.slice(action.index + 1)
      ];
    case 'ADD_COUNTER':
      return [...state, 0];
    case 'REMOVE_COUNTER':
      return [...state.slice(0, state.length - 1)];
    case 'RESET_COUNTERS':
      return state.map(() => 0);
    default:
      return state;
  }
};
