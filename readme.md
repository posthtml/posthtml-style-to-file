# PostHTML-style-to-file
[![npm version](https://badge.fury.io/js/posthtml-style-to-file.svg)](http://badge.fury.io/js/posthtml-style-to-file)

## Usage

```js
var posthtml = require('posthtml'),
    html = fs.readFileSync('path/to/html', 'utf-8').toString();

posthtml()
    .use(require('posthtml-style-to-file')({ path: ''./dist/style.css''}))
    .process(html)
    .then(function(result) {
        console.log(result.html);
    })
```
### Input html

```html
<html>
<head>
    <title>Wow</title>
    <style type="text/css">
        html{ margin: 0 }
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

### Output css

```css
/* ./dist/style.css */
html{ margin: 0 }
body{background: #fff;}
div.button{border: 1px solid #000;}
```
