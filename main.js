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

/*Mudar o header da pagina quando der scroll */

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function(){
  if(window.scrollY >= navHeight){
    // scroll é menor que a altura do header
    header.classList.add('scroll')
  }else {
    //menor que a altura do header 
    header.classList.remove('scroll')
  }
})

/* Testimonials slider com swiper*/
//Usando a API da biblioteca swiper
const swiper = new Swiper('.swiper', {/*Está criando uma constante swiper, que esta recebendo um novo swiper com um container como primeiro argumento no formato de string '.swiper'e o segundo argumento e um objeto {}*/
  slidesPerView: 1, // Propriedade que dita quantos slides que quero ver.
  pagination: { /* Um objeto que tem um elemento o elemento el: com um nome do elemento '.swiper-pagination'*/
    el: '.swiper-pagination'
  },
  mousewheel: true, //Move o slider com a rodinha do mouse
  keyboard: true //Move com as setas do teclado
})

/* ScrollReavel : Mostrar elementos quando der scroll na página*/

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700, // 700 mili segundos
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #abaut .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials
  #contact .text, #contact .links
  `, { interval: 100})


  /* Botão voltar para o topo  */

  const backToTopButton = document.querySelector('.back-to-top')
  