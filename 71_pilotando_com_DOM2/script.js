 Manipulando conteúdo
 textContent

 const element = document.querySelector('h1');
 element.textContent += " Olá Devs!"
 -=-=-==-=-=-=--=-==-=-==-=--=-=-==-=-=-=-=-=--=

 innerText

 const element = document.querySelector('h1');
 element.innerText = 'Olá Devs'
 -=-=-==-=-=-=--=-==-=-==-=--=-=-==-=-=-=-=-=--=

 innerHTML

 const element = document.querySelector('h1');
 element.innerHTML = 'Olá Devs <strong>sera</strong>';
 -=-=-==-=-=-=--=-==-=-==-=--=-=-==-=-=-=-=-=--=

 Value
 const element = document.querySelector('input');
 element.value = 'valor que eu quiser'
 -=-=-==-=-=-=--=-==-=-==-=--=-=-==-=-=-=-=-=--=

 Atributos

 const header = document.querySelector('header');
 header.setAttribute('id', 'header');
 -=-=-==-=-=-=--=-==-=-==-=--=-=-==-=-=-=-=-=--=

 const headerID = document.querySelector('#header');
 -=-=-==-=-=-=--=-==-=-==-=--=-=-==-=-=-=-=-=--=

 console.log(headerID)
 console.log(headerID.getAttribute('id'));
 -=-=-==-=-=-=--=-==-=-==-=--=-=-==-=-=-=-=-=--=

 Alterando estilos

 const element = document.querySelector('body');
 element.style.backgroundColor = "#f9f3D2"
 console.log(element.style.backgroundColor);
 -=-=-==-=-=-=--=-==-=-==-=--=-=-==-=-=-=-=-=--=

 Alterando estilos com style e classList
 const element = document.querySelector('body')

 element.classList.add('active', 'green')
 console.log(element.classList)
 element.classList.remove('active')
 element.classList.toggle('active')
 console.log(element.classList)
 -=-=-==-=-=-=--=-==-=-==-=--=-=-==-=-=-=-=-=--=

 Navegando pelos elementos 
 parentElement e parentNode

 const element = document.querySelector('h1');
 console.log(element.parentElement)
 -=-=-==-=-=-=--=-==-=-==-=--=-=-==-=-=-=-=-=--=

 navegando pelos elementos
 childNodes children

const el = document.querySelector('body');
 console.log(el.childNodes);
 console.log(el.children);

 firstChild firstElementChild
 console.log(el.firstChild);
 console.log(el.firstElementChild);
  lastChild lastElementChild
 console.log(el.lastChild);
 console.log(el.lastElementChild);
 -=-=-==-=-=-=--=-==-=-==-=--=-=-==-=-=-=-=-=--=

 const el = document.querySelector('body script');
 nextSibling nextElementSibling
 console.log(el.nextSibling)
 console.log(el.nextElementSibling)

 previousSibling previousElementSibling
 console.log(el.previousSibling)
 console.log(el.previousElementSibling)
 -=-=-==-=-=-=--=-==-=-==-=--=-=-==-=-=-=-=-=--=

 Criando e adicionando elementos

 createElement
 const div = document.createElement('div');
 div.innerText = "Olá devs!"

 append prepend
 const body = document.querySelector('body');

 body.append(div)
 body.prepend(div)
 -=-=-==-=-=-=--=-==-=-==-=--=-=-==-=-=-=-=-=--=

 Adicionando elementos
 insertBefore
 const div = document.createElement('div');
 div.innerText = 'Olá Devs!';

 const body = document.querySelector('body');
 const header = body.querySelector('script');
 body.insertBefore(div, header.nextElementSibling);
 -=-=-==-=-=-=--=-==-=-==-=--=-=-==-=-=-=-=-=--=

Eventos
const input = document.querySelector('input');
/* input.onkeydown = function() {
    console.log('rodei')
} */
 -=-=-==-=-=-=--=-==-=-==-=--=-=-==-=-=-=-=-=--=

/*
const h1 = document.querySelector('h1');

h1.addEventListener('click', print)

function print() {
    console.log('print')
} 
*/

 argumento event
/* const input = document.querySelector('input');

input.onclick = function(event) {
    console.log(event.currentTarget.value);
} */
