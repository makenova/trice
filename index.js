'use strict';

var oclock = require('o-clock')
var ordinal = require('ordinal-numbers')

function parseDate(object, date) {
  var dateString = date.toDateString()

  object.day = dateString.split(' ')[0]
  object.month = dateString.split(' ')[1]
  object.monthDate = ordinal(date.getDate())
  object.year = date.getFullYear()
}

function parseTime(object, date) {
  var timeString = date.toTimeString().split(' ')[0]
  var oclockString = oclock(date)

  object.hour = oclockString.split(':')[0]
  object.minutes = timeString.split(':')[1]
  object.seconds = timeString.split(':')[2]
  object.meridiem = oclockString.split(' ')[1]
}

function Occasion(date) {
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

  this.valueOf = function valueOf() {
    return this.date.toString()
  }

  this.toString = function toString() {
    return this.date.toString()
  }

  this.getDate = function getDate() {
    return this.day + ', ' + this.month + ' ' + this.monthDate + ' ' + this.year
  }

  this.getTime = function getTime() {
    return oclock(this.date)
  }

  this.format = function format(formatString){
    if(!formatString) return  this.date.toString()

    return formatString
      .split('')
      .map(value => this[this.formatKey[value]] || value)
      .join('')
  }
}

module.exports = Occasion
