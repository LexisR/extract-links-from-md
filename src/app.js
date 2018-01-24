const fs = require('fs');
let collection = [];

fs.readFile('markdown.md', 'utf8', function (err, contents) {

  var file = contents;
  // console.log(file);
  
  // const newRegex = /(\(.+?)(\))/g;
  // const name = /(\[(.*?)\])/g;
  const newRegex = /(\[(.*?)\]\()(.+?)(\))/g;
  let myArray;

  while ((myArray = newRegex.exec(file)) !== null) {
    var msg = myArray[0];
    // var subString = msg.substring(1, msg.length - 1);
    // console.log(subString);

    // collection[0] = {
    //   href: JSON.stringify(subString)

    // }
    console.log(msg.split(' '));
  }

});
class ExtractLinksFromMd {
  constructor(link, text) {
    this.href = link;
    this.text = text;
  }
}
//module.exports.fs = fs;


//funcion de test 
// module.exports = {
//   extractLinksFromMd(paragraph) {
//     return  [
//       { href: 'https://en.wiktionary.org/wiki/labore', text: 'labore' },
//       { href: 'https://en.wiktionary.org/wiki/dolore', text: 'dolore' },
//       { href: 'http://foo.com', text: 'foo' },
//     ]
//   }
// };

