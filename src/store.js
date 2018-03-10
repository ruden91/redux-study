import AppDispatcher from './AppDispatcher';
import EventEmitter from 'events';

const initialState = {
  numberOfPeople: 10,
  slicesPerPerson: 5  
}
let data = { ...initialState };

class Store extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register((action) => {
      switch(action.type) {
        case 'UPDATE_NUMBER_OF_PEOPLE':
        data.numberOfPeople = action.value;
        this.emit('change');
        break;

        case 'UPDATE_SLICES_PER_PERSON':
        data.slicesPerPerson = action.value;
        this.emit('change');
        break;

        case 'RESET':
        data = { ...initialState };
        this.emit('change');
        break;

        default:
        data = { ...data };
        this.emit('change');

      }
    })
  }

  getState() {
    return data;
  }
}

export default new Store();