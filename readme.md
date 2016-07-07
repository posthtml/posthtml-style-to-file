[![NPM][npm]][npm-url]
[![Deps][deps]][deps-url]
[![Tests][travis]][travis-url]
[![Coverage][cover]][cover-url]

<div align="center">
  <img width="220" height="150" title="PostHTML" src="http://posthtml.github.io/posthtml/logo.svg">
  <img width="180" height="150" title="CSS"           src="https://worldvectorlogo.com/logos/css3.svg">
  <h1>Style-to-File Plugin</h1>
  <p>Save DOM styles to CSS file</p>
</div>

<h2 align="center">Install</h2>

```bash
npm i -D posthtml-style-to-file
```

<h2 align="center">Usage</h2>

### Options

__`path`__

Destination path, where the extracted CSS is saved to.

<h2 align="center">Example</h2>

```js
const posthtml = require('posthtml')
const styleToFile = require('posthtml-style-to-file')

const html = readFileSync('path/to/html', 'utf8')

posthtml([ styleToFile({ path: './dist/style.css' }) ])
    .process(html)
    .then((result) => console.log(result.html))
```

__index.html__

```html
<html>
<head>
    <title>Wow</title>
    <style type="text/css">
        html { margin: 0 }
    </style>
</head>
<body style="background: #fff;">
  <div class="button" style="border: 1px solid #000;">
    <div class="button__text">
        Text
    </div>
  </div>
</body>
</html>
```

__style.css__

```css
html{ margin: 0 }
body{ background: #fff; }
div.button{ border: 1px solid #000; }
```

<h2 align="center">LICENSE</h2>

> MIT License (MIT)

> Copyright (c) PostHTML Ivan Voischev <voischev.ivan@ya.ru>

> Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

> The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

[npm]: https://img.shields.io/npm/v/posthtml-style-to-file.svg
[npm-url]: https://npmjs.com/package/posthtml-style-to-file

[deps]: https://david-dm.org/posthtml/posthtml-style-to-file.svg
[deps-url]: https://david-dm.org/posthtml/posthtml-style-to-file

[style]: https://img.shields.io/badge/code%20style-standard-yellow.svg
[style-url]: http://standardjs.com/

[travis]: http://img.shields.io/travis/posthtml/posthtml-style-to-file.svg
[travis-url]: https://travis-ci.org/posthtml/posthtml-style-to-file

[cover]: https://coveralls.io/repos/github/posthtml/posthtml-style-to-file/badge.svg?branch=master
[cover-url]: https://coveralls.io/github/posthtml/posthtml-style-to-file?branch=master
