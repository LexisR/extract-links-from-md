
/* El ejercicio pide un string como input y no un file, adiconalemnete si un usuario baja el paquete, no va apoder pasarle parametros
 ta que solo queda disponiblñe ára ser usado con el file especificado ya que esta 
 cableado, y para cambiarlo tendrian que editar nuestro paquete, por eso lo cambiamos
 a una funcion que puede recibir lo que sea y ser usado sin necesidad de tocar nuestro codigo
fuente
*/

/* fs.readFile('markdown.md', 'utf8', function (err, contents) {//un string o un objeto
  Debemos hacer una funcion que reciba como parametro un string y no un markdown.
*/

class Link { // usando la clase link funcionapues al final Link es un objeto
  constructor(link, text) {
    this.href = link;
    this.text = text;
  }
}

//debemos hacer una funcion que reciba como parametro un string y no un markdown.
module.exports = {
  extractLinksFromMd(paragraph) {
    const newRegex = /(\[(.*?)\]\()(.+?)(\))/g;
    let myArray, resultArray = [];
   
    // para regex podemos usar string.match, la diferencia con exec es lo que retorna y como suarlo
    // revisar regex101.com
    while ((myArray = newRegex.exec(paragraph)) !== null) { // exec retorna los grupos de la regex
      const text = myArray[2]; // este grupo tiene el texto (grupo 2)
      const href = myArray[3]; // este grupo tiene el link (grupo 3)
      const link = new Link(href,text); // usando la clase de Links para almacenar en el array
      // O podemos crear el objeto directamente como aqui abajo
      // resultArray.push({ href: href, text: text }); // { href, text } ES6 
      resultArray.push(link);
    }
    console.log(resultArray); // solo para porpositos de debug, podemos quitarlo
    // ya que no estoy usando el debuger de vscode, para correrlo hice un archivo
    // llamado extracLinks.js y lo puedo ejecutar con: node src/hola.js
    // si quiero ejecutar archivos node puedo hacerlo asi y si no especifico un archivo
    // puedio entrar al prompt de node solo tipeando: node y alli puedo escribir codigo node normal
    // es decir , puedo hacer cosas como: const a = require('src/app.js'); const b = 1 +2; etc
    // el archivo hola es porque no quiero estar tipeando la prueba a cada rato (antes de llamar al npm test no tenia como probar)
    return resultArray;
  }
};

// PS: Excelente! Ya se como leer archivo!!! Gracias