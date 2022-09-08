// if... else

let temperature = 36
let heighTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >=37


if(heighTemperature >= 37.5) {
    console.log('Febre alta')    
} else if (mediumTemperature < 37.5 && temperature >= 37) {
    console.log('Febre moderada')
} else {
    console.log('Saudável')
}