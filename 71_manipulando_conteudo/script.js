// querySelector()

// const element = document.querySelector('[src]')

// Qual usar

// getElementsByTagName (HTMLCollection)
// getElementsByClassName (HTMLCollection)
// querySelector (element)
// querySelectorAll (Nodelist)
// getElementById (element)


const elements = document.querySelectorAll('#one')


elements.forEach(el => console.log(el))
console.log(elements)