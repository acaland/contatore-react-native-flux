class Dispatcher {
  constructor() {
    this.isDispatching = false;
    this.actionHandlers = [];
  }

  register(actionHandler) {
    this.actionHandlers.push(actionHandler);
  }

  dispatch(action) {
    if (this.isDispatching) {
      throw new Error('I am busy already dispatching')
    }
    this.isDispatching = true;
    // Send to the Stores
    this.actionHandlers.forEach(handler => handler(action));
    this.isDispatching = false;
  }
}

export default new Dispatcher();
