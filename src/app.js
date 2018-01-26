class Link { // usando la clase sirve pues al final Link es un objeto igual
  constructor(link, text) {// se crea constructor de la clase que recibe parametros 
    this.href = link;
    this.text = text;
  }
}

//un string debemos hacer una funcion que reciba como parametro un string y no un markdown.
module.exports = {
  extractLinksFromMd(paragraph) {
    const newRegex = /(\[(.*?)\]\()(.+?)(\))/g;
    let myArray, resultArray = [];
    /* para regex podemos usar string.match, revisar diferencia en que retorna y como suarlo
    vs exec */

    // revisar regex101.com
    while ((myArray = newRegex.exec(paragraph)) !== null) { // exec retorna los grupos de la regex
      const text = myArray[2]; // este grupo tiene el texto (grupo 2)
      const href = myArray[3]; // este grupo tiene el link (grupo 3)
      const link = new Link(href, text); // usando la clase de Links para almacenar en el array
      // O podemos crear el objeto directamente como aqui abajo
      // resultArray.push({ href: href, text: text }); // { href, text } ES6 
      resultArray.push(link);
    }
    console.log(resultArray); // solo para porpositos de debug, podemos quitarlo
    // ya que no estoy usando el debuger de vscode, para correrlo hice un archivo
    // llamado extraclinks.js y lo puedo ejecutar con: node src/extraclinks.js
    // si quiero ejecutar archivos node puedo hacerlo asi y si no especifico un archivo
    // puedio entrar al prompt de node solo tipeando: node y alli puedo escribir codigo node normal
    // es decir, puedo hacer cosas como: const a = require('src/app.js'); const b = 1 +2; etc
    // el archivo extraclinks.js es porque no quiero estar tipeando la prueba a cada rato (antes de llamar al npm test no tenia como probar)
    return resultArray;
  }
};

// PS: Excelente! Ya se como leer archivo!!! Gracias