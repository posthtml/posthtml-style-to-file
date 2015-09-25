var fs = require('fs');
var path = require('path');

module.exports = function(options) {
    options = options || { path: './result.css' };

    var buf = '';

    return function(tree) {

        tree.match({ tag: 'style' }, function(node) {
            buf += node.content[0].trim() || '';
            return node;
        });

        tree.match({ attrs: { style: true }}, function(node) {
            var cls = '';
            node.attrs.class &&
                (cls = '.' + (node.attrs.class.split(' ')).join('.'));

            buf += '\n' +
                node.tag +
                (node.attrs.id || '') +
                cls + '{' + node.attrs.style + '}';
            return node;
        });

        fs.writeFile(path.resolve(options.path), buf, 'utf-8', function(error) {
            if (error) throw error;
        });

        return tree;
    };
};
