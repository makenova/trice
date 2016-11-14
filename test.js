import test from 'ava'
import trice from './index'

test("new trice constructor without arguments", t => {
  let date = new Date()
  t.is(new trice().toString(), date.toString())
})

test("new trice constructor with arguments", t => {
  let date = new Date()
  t.is(new trice(date).toString(), date.toString())
})

test("trice format without arguments", t => {
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

test.skip("trice format with arguments", t => {
  let date = new Date()
  t.is(new trice(date).format('d M D Y'), date.toDateString())
})
