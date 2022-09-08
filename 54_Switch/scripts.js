// Throw significa Lançar
// try significa tentar
// catch significa pegar

function sayMyName(name = '') {
    if (name === '')
    throw new Error("Nome é necessario")
}

console.log('depois do erro')


// try... catch
try {
    sayMyName()
} catch(e) {
    console.log(e)
}

