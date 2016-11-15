# Trice - less than a moment

[![Build Status](https://travis-ci.org/makenova/trice.svg?branch=master)](https://travis-ci.org/makenova/trice)

⏰ Small date and time format helper, for when [momentjs](http://momentjs.com/)
too much. ⏰

## NOTE
Trice is a simple replacement for the exellent momentjs module because I was
only using a small portion of it. I still use momentjs when I need accuracy and
flexibility.

### Tradeoffs

 * Trice does not deal with timezones.
 * The `format`
method uses single characters for tokens to make parsing simple.
 * probably a lot more

If Trice doesn't do exactly what you want, use momentjs or open an
[issue](https://github.com/makenova/trice/issues)

## Install

```sh
npm install --save trice
```

## Use

```js
var Trice = require('trice')
// OR
import Trice from 'trice'

let date = new Date(2016, 11, 13, 21, 45, 30)
let trice = new Trice(date) // the date is optional

trice.getDate() // => 'Sun, Nov 13th 2016'
trice.getTime() // => '9:45 PM'
trice.format('d, M D Y') // => 'Sun, Nov 13th 2016''
trice.format('h:m:s p') // => '9:45:30 PM'
trice.format('d, M D Y h:m:s p') // => 'Sun, Nov 13th 2016 9:45:30 PM'
```

## API

### `new Trice([date])`

create a trice object with an optional date object. If you do not provide a date
in the constructor, Trice will assume you mean now.

### `trice.format([formatString])`

returns a string formatted according to the formatString option. If the formatString is omitted, then `toString` is called on the date and returned.

| Format Character | Output |
|:--:|:--:|
| Y | year |
| M | month |
| D | ordinal day of the month |
| d | day of the week |
| h | hour |
| m | minute |
| s | second |
| p | meridiem |

### `trice.getDate`

return the date in the default format "d, M D Y"

### `trice.getTime`

return the time in the default format "h:m p"

## Bugs

Please report any bugs to: https://github.com/makenova/trice/issues

## License

Licensed under the MIT License: https://opensource.org/licenses/MIT
