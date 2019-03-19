import { EventEmitter } from 'events';

import dispatcher from '../AppDispatcher';

import { SHOW_LOADER, HIDE_LOADER } from '../actions/types';

const initialState = false;

class LoaderStore extends EventEmitter {
  constructor(state = initialState) {
    super();

    this.isVisible = state;
  }

  getState() {
    return this.isVisible;
  }

  setState(newState) {
    this.isVisible = newState;

    this.emitChange();
  }

  handleActions({ type }) {
    switch (type) {
      case SHOW_LOADER: {
        this.setState(true);
        break;
      }
      case HIDE_LOADER: {
        this.setState(false);

        break;
      }
      default:
        break;
    }
  }

  emitChange() {
    this.emit('change');
  }
}

const loaderStore = new LoaderStore();

dispatcher.register(loaderStore.handleActions.bind(loaderStore));

const storeProxy = {
  getState: () => loaderStore.getState(),
  on: (...params) => loaderStore.on(...params),
  removeListener: (...params) => loaderStore.removeListener(...params)
};

export default storeProxy;
