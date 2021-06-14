
This is a compressor for https://utb.sakura.ne.jp/tekitou/p<br>
This compresses a text matches `/^[0-9a-f,]+$/`.

## Usage
```javascript
const str = '12345,11111,12345';
const data = pzl.enc('str')
// -> '12345,1kg,ls'

pdcDecode(data);
// -> '12345,11111,12345';
```

## Customize

You can search and fix the source code to customize settings.

### Max length
Default: 500

### Reserved symboles
Default: `ghijklmnopqrstuvwxyzABCDEFGHIJKLNMOPRSTUVWXYZ`

## Lisense
Copyright (c) 2021 utubo under the [MIT](https://opensource.org/licenses/mit-license.php)

