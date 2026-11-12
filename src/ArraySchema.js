import Schema from './Schema.js';

export default class ArraySchema extends Schema {
  constructor() {
    super()
    this.integerCheck = false;
    this.customCheck = null;
  }

  integers() {
    this.integerCheck = true;
    return this
  }

  custom(check) {
    this.customCheck = check;
    return this
  }

  isValid(value) {
    if (!Array.isArray(value)) {
      return false
    }

    if (this.integerCheck) {
      if (value.length === 0 || !value.every((item) => Number.isInteger(item))) {
        return false
      }
    }

    if (this.customCheck && !value.every((item) => this.customCheck(item))) {
      return false
    }

    return true
  }
}