/* jshint mocha: true, maxlen: false */
var posthtml = require('posthtml');
var plugin = require('..');
var expect = require('chai').expect;
var fs = require('fs');

var HTML = fs.readFileSync('./test/test.html', 'utf-8'),
    CSS = fs.readFileSync('./test/test.css', 'utf-8');

function test(html, referenceCss, done) {
    posthtml()
        .use(plugin({ path: './test/test2.css' }))
        .process(html)
        .then(function(/*result*/) {
            setTimeout(function() {
                expect(referenceCss).to.eql(fs.readFileSync('./test/test2.css', 'utf-8').toString());
                done();
            }, 20);
        }).catch(function(error) {
            done(error);
        });
}

describe('Simple test', function() {
    it('style to file', function(done) {
        test(
            HTML,
            CSS,
            done
        );
    });

});
