const nav = document.querySelector('nav')

window.addEventListener('scroll', (e) => {
    nav.classList.toggle('nav-scroll', window.scrollY > 0)
})


const hamburgerMenu = document.querySelector('.hamburger-menu')
const bgListNavMobile = document.querySelector('.bg-list-nav-mobile')
const listNavMobile = document.querySelector('.list-nav-mobile')

hamburgerMenu.addEventListener('click', () => {
    listNavMobile.classList.toggle('click-list-nav-mobile')
    bgListNavMobile.classList.toggle('click-bg-list-nav-mobile')
})

bgListNavMobile.addEventListener('click', () => {
    listNavMobile.classList.toggle('click-list-nav-mobile')
    bgListNavMobile.classList.toggle('click-bg-list-nav-mobile')
})