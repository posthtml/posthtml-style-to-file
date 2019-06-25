/* jshint mocha: true, maxlen: false */
var posthtml = require('posthtml');
var plugin = require('..');
var expect = require('chai').expect;
var fs = require('fs');

var HTML = fs.readFileSync('./test/test.html', 'utf-8');
var CSS = fs.readFileSync('./test/test.css', 'utf-8');

function test(html, options, callbackSuccess, callbackError) {
    posthtml()
        .use(plugin(options))
        .process(html)
        .then(callbackSuccess)
        .catch(callbackError);
}

describe('Simple test', function() {
    it('style to file', function(done) {
        test(
            HTML,
            { path: './test/test2.css' },
            function() {
                setTimeout(function() {
                    expect(CSS).to.eql(fs.readFileSync('./test/test2.css', 'utf-8').toString());
                    done();
                }, 20);
            },
            function(error) {
                done(error);
            }
        );
    });

    it('remove style attrs', function(done) {
        test(
            HTML,
            {
                path: './test/test2.css',
                removeStyle: 'attrs'
            },
            function(result) {
                setTimeout(function() {
                    expect(result.html).to.eql(fs.readFileSync('./test/testRemoveAttrs.html', 'utf-8').toString());
                    done();
                }, 20);
            },
            function(error) {
                done(error);
            }
        );
    });

    it('remove style tag', function(done) {
        test(
            HTML,
            {
                path: './test/test2.css',
                removeStyle: 'tag'
            },
            function(result) {
                setTimeout(function() {
                    expect(result.html).to.eql(fs.readFileSync('./test/testRemoveTag.html', 'utf-8').toString());
                    done();
                }, 20);
            },
            function(error) {
                done(error);
            }
        );
    });

    it('remove style all', function(done) {
        test(
            HTML,
            {
                path: './test/test2.css',
                removeStyle: 'all'
            },
            function(result) {
                setTimeout(function() {
                    expect(result.html).to.eql(fs.readFileSync('./test/testRemoveAll.html', 'utf-8').toString());
                    done();
                }, 20);
            },
            function(error) {
                done(error);
            }
        );
    });
});
