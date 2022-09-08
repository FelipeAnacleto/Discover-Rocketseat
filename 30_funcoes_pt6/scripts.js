// Callback function

function sayMyName(name) {
    name()
}

sayMyName(
    () => {
        console.log('estou em uma callback')
    }
)