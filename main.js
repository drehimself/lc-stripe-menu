const menuItems = document.querySelectorAll('nav ul li')

menuItems.forEach(menuItem => menuItem.addEventListener('mouseenter', handleEnter))
menuItems.forEach(menuItem => menuItem.addEventListener('mouseleave', handleLeave))

function handleEnter() {
  const menu = this.querySelector('.menu')

  menu.classList.add('menu-enter')
  setTimeout(() => menu.classList.add('menu-enter-active'), 50)
}

function handleLeave() {
  const menu = this.querySelector('.menu')

  menu.classList.remove('menu-enter', 'menu-enter-active')

  // menu.classList.add('menu-leave')
  // setTimeout(() => menu.classList.add('menu-leave-active'), 50)

  // setTimeout(() => menu.classList.remove('menu-leave', 'menu-leave-active'), 200)
}
