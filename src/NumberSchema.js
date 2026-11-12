import Schema from './Schema.js';

export default class NumberSchema extends Schema {
  isValid(value) {
    return typeof value === 'number' && !Number.isNaN(value)
  }
}