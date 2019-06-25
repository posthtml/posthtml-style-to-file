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

## Options

#### `path`

Type: `String`  
Default: `./result.css`  
Description: *Destination path, where the extracted CSS is saved to.*  

#### `removeStyle`

Type: `String`  
Default: ``  
Description: *Removes the specified value `attrs` | `tag` | `all`*  

__`removeStyle`__

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

[npm]: https://img.shields.io/npm/v/posthtml-style-to-file.svg
[npm-url]: https://npmjs.com/package/posthtml-style-to-file

[deps]: https://david-dm.org/posthtml/posthtml-style-to-file.svg
[deps-url]: https://david-dm.org/posthtml/posthtml-style-to-file

[style]: https://img.shields.io/badge/code%20style-standard-yellow.svg
[style-url]: http://standardjs.com/

[travis]: http://img.shields.io/travis/posthtml/posthtml-style-to-file.svg
[travis-url]: https://travis-ci.org/posthtml/posthtml-style-to-file

[cover]: https://coveralls.io/repos/github/posthtml/posthtml-style-to-file/badge.svg
[cover-url]: https://coveralls.io/github/posthtml/posthtml-style-to-file
