let oclock = require('o-clock')
let ordinal = require('ordinal-numbers')

class Occasion {
  constructor(date) {
    this.date = date || new Date()
  }

  valueOf() {
    return this.date.toString()
  }

  toString() {
    return this.date.toString()
  }

  getDate() {
    var dateString = this.date.toDateString()
    var day = dateString.split(' ')[0]
    var month = dateString.split(' ')[1]
    var date = ordinal(this.date.getDate())

    return `${day}, ${month} ${date} ${this.date.getFullYear()}`
  }

  getTime() {
    return oclock(this.date)
  }

  format(formatString){
    if(!formatString) return  this.date.toString()

    // TODO parse format string and return formatted
    // formatString === 'd M D Y' || 'h : m : s mm'
    // d day of the week
    // M month
    // D date of the month
    // Y year
    // h hour
    // m minutes
    // s seconds
    // mm meridiem
    return  this.date.toString()
  }
}

module.exports = Occasion
