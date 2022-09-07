var lista = ['Laranja', 'Maçã', 'Pera', 'Jaca', 'Limão'];

var listaUL = document.createElement('ul');

var body = document.getElementsByTagName('body');

//console.log(body[0]);

body[0].appendChild(listaUL);

var listaNoBody = document.getElementsByTagName('ul');

console.log(listaNoBody[0]);

for(var i = 0; i < lista.length; i++) {

    var liFor = document.createElement('li');

    var textoLi = document.createTextNode(lista[i]);

    liFor.appendChild(textoLi);

    console.log(liFor);

    listaNoBody[0].appendChild(liFor);
}