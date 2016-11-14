# Trice - less than a moment

## NOTE

**This is just a placeholder, it's still a work in progress. Right now it only
returns exactly the format that I need in my use case**

[![Build Status](https://travis-ci.org/makenova/trice.svg?branch=master)](https://travis-ci.org/makenova/trice)

Small date and time format helper, for when [momentjs](http://momentjs.com/)
too much.

## Install

```sh
npm install --save trice
```

## Use

```js
var trice = require('trice')
// OR
import trice from 'trice'

let date = new Date(2016, 11, 13, 21, 45, 30)
let trice = new trice(date)

trice.getDate() // => 'Sun, Nov 13th 2016'
trice.getTime() // => '9:45 PM'
```

## API

### `trice([date])`

create a trice object.

### `trice.getDate`

return the date in the default format "Day, Month ordinal-date-of-the-month year"

### `trice.getTime`

return the time in the default format "Hour:Minutes Meridiem"

## Bugs

Please report any bugs to: https://github.com/makenova/trice/issues

## License

Licensed under the MIT License: https://opensource.org/licenses/MIT
