var expect = require("chai").expect;// investigar
var app = require("../src/app.js");
const paragraph = `# Lorem ipsum
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut [labore](https://en.wiktionary.org/wiki/labore) et
[dolore](https://en.wiktionary.org/wiki/dolore) magna aliqua. Ut enim ad minim
veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat.
[foo](http://foo.com)
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
culpa qui officia deserunt mollit anim id est laborum.` //string con template literal permite espacio

describe("extractLinksFromMd()", function(){
  it("It should return an array with three objects", function(){
    const results = app.extractLinksFromMd({paragraph});//{paragrap:paragraph}es5
    expect(results).to.deep.equal( [
      { href: 'https://en.wiktionary.org/wiki/labore', text: 'labore' },
      { href: 'https://en.wiktionary.org/wiki/dolore', text: 'dolore' },
      { href: 'http://foo.com', text: 'foo' },
   ]);
  });
});
