var arr = [5, "felipe", true, {teste: 1, teste: 2}]; // obj -> {}  Colchete e um objeto e chaves são arrays
var cadastro = ["felipe", 26, "Masculino", "Programador"];

console.log(arr);

console.log(arr[0]);

console.log(`Meu nome é ${cadastro[0]} tenho ${cadastro[1]} sou do sexo ${cadastro[2]} e minha profissão é ${cadastro[3]}`);

arr[4] = 10;

arr[0] = 'teste';