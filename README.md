
<p align="center">
    <img src="https://s9.postimg.org/afxksgdov/logo_opt.png"><br><br>
  <a href="https://github.com/Evelynpa/extract-links-from-md">
	  <img src="https://s17.postimg.org/op1jl2ifz/dependency.png">
  </a> 
 <a href="https://www.npmjs.com/package/extract-link-evelexis">
	  <img src="https://s17.postimg.org/az70brv6n/npm.png">
  </a> 
   <a href="https://github.com/Evelynpa/extract-links-from-md">
	  <img src="https://s17.postimg.org/3s5bg4phb/release.png">
  </a> 
  <a href="https://github.com/Evelynpa/extract-links-from-md">
	 <img src="https://camo.githubusercontent.com/f7b824b6bb484f4729282103fe2d6cd69988c4f9/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f64742f646973706c61792e6a732e737667">
  </a> 
   <a href="https://www.isc.org/downloads/software-support-policy/isc-license/">
	 <img src="https://s9.postimg.org/u6uec6uu7/release.png">
  </a> 
  <a href="https://github.com/Evelynpa/extract-links-from-md">
	  <img src="https://s9.postimg.org/no65cq5db/javascript.png">
  </a> 
  <br><br>
<i>
Evelexis is a library that facilitates the extraction of links from a paragraph, to facilitate the search of links of any web page with format Markdown.
</i>
</p>

----------

### Features
 - Free of dependency
 - Extract likns from any website

----------
### Work tool

The Trello tool was used to organize and manage our library, based on the request of requirements that they requested.

[![trello](https://s9.postimg.org/wmw7q4sdb/release.png)](https://trello.com/b/2cZmkhl1/libreria-javascript)

----------

### Case of use 

Create a library that allows the pages of the universities to extract the links from the source or quote of that information quickly.

----------

### Basic Usage

 1. Import evelexis from ``src``
 2. Copy your file to ``extractLinks.js``
 3. Execute the code in ``git``
 4. The tests are performed with ``npm test``
 
----------

### Development

`$ npm install evelexis`
`$ npm test`

```javascript
const app = require('./app.js');
const text = `# Lorem ipsum
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut [labore](https://en.wiktionary.org/wiki/labore) et
[dolore](https://en.wiktionary.org/wiki/dolore) magna aliqua. Ut enim ad minim
veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat.
[foo](http://foo.com)
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
culpa qui officia deserunt mollit anim id est laborum.`;
app.extractLinksFromMd(text);

console.log(resultArray);
// [
//   { href: 'https://en.wiktionary.org/wiki/labore', text: 'labore' },
//   { href: 'https://en.wiktionary.org/wiki/dolore', text: 'dolore' },
//   { href: 'http://foo.com', text: 'foo' },
// ]
```
----------


### Development environment 
[![js](https://s17.postimg.org/e7g32rh6n/javascript.png)](https://github.com/Evelynpa/extract-links-from-md/tree/evelexis)
[![node](https://s17.postimg.org/wn0k0dddb/release.png)](https://github.com/Evelynpa/extract-links-from-md/tree/evelexis)
[![mocha](https://s17.postimg.org/lbxwbnbjj/release.png)](https://github.com/Evelynpa/extract-links-from-md/tree/evelexis)
[![chai](https://s17.postimg.org/bdcxpnf3z/npm.png)](https://github.com/Evelynpa/extract-links-from-md/tree/evelexis)

----------
### Authors

-   **Lexis Rodriguez** - *Test development - Functional support* -  [@LexisR](https://github.com/lexisr)
-   **Evelyn Parra** - *Functional development - technical support and documentation* -  [@Evelynpa](https://github.com/Evelynpa)