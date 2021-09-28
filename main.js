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

function changeHeaderWhenScroll() {
  if(window.scrollY >= navHeight){
    // scroll é menor que a altura do header
    header.classList.add('scroll')
  }else {
    //menor que a altura do header 
    header.classList.remove('scroll')
  }
}


/* Testimonials slider com swiper*/
//Usando a API da biblioteca swiper
const swiper = new Swiper('.swiper', {/*Está criando uma constante swiper, que esta recebendo um novo swiper com um container como primeiro argumento no formato de string '.swiper'e o segundo argumento e um objeto {}*/
  slidesPerView: 1, // Propriedade que dita quantos slides que quero ver.
  pagination: { /* Um objeto que tem um elemento o elemento el: com um nome do elemento '.swiper-pagination'*/
    el: '.swiper-pagination'
  },
  mousewheel: true, //Move o slider com a rodinha do mouse
  keyboard: true, //Move com as setas do teclado

  /* ========= RESPONSIVO ==============*/
/*========== MEDIA QUERIES ===========*/
  breakpoints: { 
    767:{
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
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
  #contact .text, #contact .links,
  footer .brand, footer .social
  `, { interval: 100})



  /* Botão voltar para o topo  */

const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  }else {
    backToTopButton.classList.remove('show')
  }
  }


/* Menu ativo conforme a seção visivel da página*/
const sections = document.querySelectorAll('main section[id]') //sections[id] = Seleciona todas as secões que tenha um ID
function activateMenuAtCurrentSection() {
    
const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4 /* Pega o tamanho da tela divide ela por 8 multiplica por 4 e soma ao deslocamento da tela em Y = window.pageYOffset  */

  for (const section of sections ) {
    const sectionTop = section.offsetTop // Pega o topo da seção
    const sectionHeight = section.offsetHeight // Pega a autula da seção
    const sectionId = section.getAttribute('id') // Pega o Id da seção

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd ) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
      .querySelector('nav ul li a[href*=' + sectionId + ']')
      .classList.remove('active')
    }
  }
}

/* When Scroll */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})
