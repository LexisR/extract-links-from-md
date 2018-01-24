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
    let msg = myArray[0];
    let lastText = ']'.charCodeAt(0);
    let subStringText = msg.substring(1, msg.length - 1);
    let subStringLink = msg.substring(1, subStringText + 2);
  
    console.log(lastText);
    

    // collection[0] = {
    //   href: JSON.stringify(subString)

    // }
    // console.log(msg.split(' '));
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

