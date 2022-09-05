const header = document.getElementById('header')
const menu = document.getElementById('nav-menu')

header.addEventListener('click', e => {
  const target = e.target

  if (target.closest('#nav-toggle')) {
    menu.classList.add('show--menu')
  }

  if (target.closest('#nav-close')) {
    menu.classList.remove('show--menu')
  }

  if (target.matches('.nav__link')) {
    menu.classList.remove('show--menu')
  }
})

 


  