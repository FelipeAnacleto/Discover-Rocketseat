var obj = {
    nome: "matheus",
    idade: "29",
    profissão: "Programador",
    estarTrabalhando: true
};

console.log(obj);
console.log(typeof obj);

console.log(obj.nome);
console.log(obj.idade);
console.log(obj.profissão);


console.log("o meu nome é" + obj.nome);
console.log(`o meu nome é ${obj.nome} tenho ${obj.idade} anos e trabalho como ${obj.profissão} `);

obj.nome = "Felipe";

console.log(obj.nome);

obj.peso = true;

console.log(obj);