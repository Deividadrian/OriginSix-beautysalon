// DOM Document Object Model

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle){ /*Para cada toogle vai criar uma constante element */
  element.addEventListener('click', function() {
    nav.classList.toggle('show')
  })/*Adiciona um elemento ouvinte ('click'). Quando clicado ele executa uma function que remove ou add o show ou seja faz a troca*/
}

/*Quando clicar em um item do menu, esconder o menu*/
const links = document.querySelectorAll('nav ul li a')/*Pesquisa por todos os seletores em 'a' e atribue a constante links*/

for (const link of links) {
  link.addEventListener('click', function (){
    nav.classList.remove('show')
  })
}/*Para cada constante link de links  adiciona um evento de click (link.addEventListener('click') este elemento vai rodar uma function (function (){nav.classList.remove('show')}) que remova a classe Show*/