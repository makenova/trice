'use strict';

let oclock = require('o-clock')
let ordinal = require('ordinal-numbers')

function parseDate(object, date) {
  let dateString = date.toDateString()

  object.day = dateString.split(' ')[0]
  object.month = dateString.split(' ')[1]
  object.monthDate = ordinal(date.getDate())
  object.year = date.getFullYear()
}

function parseTime(object, date) {
  let timeString = date.toTimeString().split(' ')[0]
  let oclockString = oclock(date)

  object.hour = oclockString.split(':')[0]
  object.minutes = timeString.split(':')[1]
  object.seconds = timeString.split(':')[2]
  object.meridiem = oclockString.split(' ')[1]
}

class Occasion {
  constructor(date) {
    this.date = date || new Date()
    this.formatKey = {
      'Y': 'year',
      'M': 'month',
      'D': 'monthDate',
      'd': 'day',
      'h': 'hour',
      'm': 'minutes',
      's': 'seconds',
      'p': 'meridiem',
    }

    parseDate(this, this.date)
    parseTime(this, this.date)
  }

  valueOf() {
    return this.date.toString()
  }

  toString() {
    return this.date.toString()
  }

  getDate() {
    return `${this.day}, ${this.month} ${this.monthDate} ${this.year}`
  }

  getTime() {
    return oclock(this.date)
  }

  format(formatString){
    if(!formatString) return  this.date.toString()

    return formatString
      .split('')
      .map(value => this[this.formatKey[value]] || value)
      .join('')
  }
}

module.exports = Occasion
