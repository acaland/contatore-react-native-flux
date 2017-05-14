import Dispatcher from './Dispatcher';
import EventEmitter from 'EventEmitter';

let conto = 0;

const increment = () => {
  conto += 1;
}

const decrement = () => {
  conto -= 1;
}

const reset = () => {
  conto = 0;
};

const handleAction = (action) => {
  switch (action.type) {
    case 'INCREMENT':
      increment();
      break;
    case 'DECREMENT':
      decrement();
      break;
    case 'RESET':
      reset();
      break;
    default:

  }
  instance.emitChange();
}

Dispatcher.register(handleAction);

class ContatoreStore extends EventEmitter {
  getConto() {
    return conto;
  }
  addChangeListener(callback) {
    this.addListener('CHANGE', callback);
  }
  removeChangeListener(callback) {
    this.removeListener('CHANGE', callback);
  }
  emitChange() {
    this.emit('CHANGE');
  }
}

const instance = new ContatoreStore()
export default instance;
