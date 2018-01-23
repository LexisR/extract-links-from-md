const fs = require('fs');

fs.readFile('markdown.md', 'utf8', function (err, contents) {
  const file = contents;
  // console.log(file);
  const newRegex = /\(.*?\)/g;
  let myArray;
  while ((myArray = newRegex.exec(file)) !== null) { 
    let msg = myArray[0];
    let subString = msg.substring(1, msg.length - 1);
    console.log(subString);
   //const newArray = [];
   //newArray.push(subString);
   //console.log(newArray);
    }
});
module.exports.fs = fs;


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

