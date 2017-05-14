import Dispatcher from './Dispatcher';

export const increment = () => {
  const action = {
    type: 'INCREMENT'
  };
  // Send action to dispatcher
  Dispatcher.dispatch(action);
};

export const decrement = () => {
  const action = {
    type: 'DECREMENT'
  };
  // Send action to dispatcher
  Dispatcher.dispatch(action);
};

export const reset = () => {
  const action = {
    type: 'RESET'
  };
  // Send action to dispatcher
  Dispatcher.dispatch(action);
};
