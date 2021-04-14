import {createElement} from '../utils/general';

const createNoRoutePointsTemplate = () => {
  return '<p class="trip-events__msg">Click New Event to create your first point</p>';
};

export default class NoRoutePoints {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createNoRoutePointsTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}