import AppDispatcher from './AppDispatcher';
import EventEmitter from 'events';

let caculator = {
  numberOfPeople: 10,
  slicesPerPerson: 2
}
export default class PizzaCaculatorStore extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register((actions) => {
      if (actions.type === 'UPDATE_NUMBER_OF_PEOPLE') {
        caculator.numberOfPeople = actions.value;

        this.emit('change');
      }

      if (actions.type === 'UPDATE_NUMBER_OF_PEOPLE') {
        caculator.numberOfPeople = actions.value;

        this.emit('change');
      }

      if (actions.type === 'UPDATE_NUMBER_OF_PEOPLE') {
        caculator.numberOfPeople = actions.value;

        this.emit('change');
      }
                  
    })
  }
}