/* eslint-disable class-methods-use-this */
import Currency from './3-currency';

export default class Price {
  constructor(amount, currency) {
    this._amount = this.validateNumber(amount);
    this._currency = this.validateCurrency(currency);
  }

  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    this._amount = this.validateNumber(newAmount);
  }

  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    this._currency = this.validateCurrency(newCurrency);
  }

  validateNumber(number) {
    if (typeof number !== 'number') {
      throw new TypeError('Amount/ConversionRate must be a number');
    } else {
      return (number);
    }
  }

  validateCurrency(currency) {
    if (!(currency instanceof Currency)) {
      throw new TypeError('currency must be a Currency');
    } else {
      return (currency);
    }
  }

  displayFullPrice() {
    return (`${this._amount} ${this._currency.displayFullCurrency()}`);
  }

  static convertPrice(amount, conversionRate) {
    return (amount * conversionRate);
  }
}
