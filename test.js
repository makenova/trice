import test from 'ava'
import trice from './index'

test('new trice constructor without arguments', t => {
  let date = new Date()
  t.is(new trice().toString(), date.toString())
})

test('new trice constructor with arguments', t => {
  let date = new Date()
  t.is(new trice(date).toString(), date.toString())
})

test('trice format without arguments', t => {
  let date = new Date()
  t.is(new trice(date).format(), date.toString())
})

test('trice getDate', t => {
  let date = new Date(2016, 10, 13)
  t.is(new trice(date).getDate(), 'Sun, Nov 13th 2016')
})

test('trice getTime', t => {
  let date = new Date(2016, 10, 13, 21, 45, 30)
  t.is(new trice(date).getTime(), '9:45 PM')
})

test("trice format with arguments 'day month date year'", t => {
  let date = new Date()
  let occasion = new trice(date)
  t.is(occasion.format('d, M D Y'), occasion.getDate())
})

test("trice format match getTime()", t => {
  let date = new Date(2016, 10, 13, 21, 45, 30)
  let occasion = new trice(date)
  t.is(occasion.format('h:m p'), occasion.getTime())
})

test("trice format with arguments 'hour minutes seconds meridiem'", t => {
  let date = new Date(2016, 10, 13, 21, 45, 30)
  t.is(new trice(date).format('h:m:s p'), '9:45:30 PM')
})

test("all fromat options", t => {
  let date = new Date(2016, 10, 13, 21, 45, 30)
  let occasion = new trice(date)
  t.is(occasion.format('d, M D Y h:m:s p'), 'Sun, Nov 13th 2016 9:45:30 PM')
})
