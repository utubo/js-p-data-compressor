// p-data-compressor
// Copyright (c) 2021 utubo under the [MIT](https://opensource.org/licenses/mit-license.php)
{
	let checkLen = s => {if (500 < s.length) throw 'too long';};
	let symbols = "ghijklmnopqrstuvwxyzABCDEFGHIJKLNMOPRSTUVWXYZ";
	var pdcEncode = str => {
		checkLen(str);
		let MAX_REPEAT = symbols.length;
		let data = str.split('');
		let out = '';
		let l = str.length;
		let i = 0;
		while (i < l) {
			let ss = str.slice(0, i);
			let from = i - MAX_REPEAT + 1;
			let head;
			let len;
			for (let j = 3; j <= l-i; j ++) {
				let k = ss.indexOf(str.substr(i, j), from);
				if (k === -1) break;
				head = ss.length - k;
				len = j;
			}
			if (len) {
				out += symbols[len] + symbols[head];
			} else {
				let c = data[i];
				out += c;
				len = 1;
				while (c === data[i + len] && len < MAX_REPEAT) len ++;
				if (2 < len) {
					out += symbols[len - 1] + symbols[0];
				} else {
					len = 1;
				}
			}
			i += len;
		}
		return out;
	};
	var pdcDecode = data => {
		checkLen(data);
		let out = '';
		let len;
		for (let c of data) {
			checkLen(out);
			let symbol = symbols.indexOf(c);
			if (symbol === -1) {
				out += c;
			} else if (len) {
				if (symbol) {
					out += out.substr(out.length - symbol, len);
				} else {
					out += out[out.length - 1].repeat(len);
				}
				len = 0;
			} else {
				len = symbol;
			}
		}
		return out;
	};
}

