This is a compressor for https://utb.sakura.ne.jp/tekitou/p<br>
This compresses a text matches `/^[0-9a-f,]+$/`.

## Demo
https://utubo.github.io/js-p-data-compressor/demo.html

## Usage
```javascript
const str = '12345,11111,12345';
const data = pdcEncode(str);
// -> '12345,1kg,ls'

const revert = pdcDecode(data);
// -> '12345,11111,12345'
```

## Customize

You can search and fix the source code to customize settings.

### Max length
Default: `500`

### Reserved symboles
Default: `ghijklmnopqrstuvwxyzABCDEFGHIJKLNMOPRSTUVWXYZ`

## License
Copyright (c) 2021 utubo under the [MIT](https://opensource.org/licenses/mit-license.php)

