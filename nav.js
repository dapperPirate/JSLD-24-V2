const nav = document.querySelector('.navbar__menu');
const navToggle = document.querySelector('.mobile__nav__toggle');

navToggle.addEventListener('click', () => {
    const visibility = nav.getAttribute('data-visible')

    if (visibility === "false") {
        nav.setAttribute("data-visible", true)
        navToggle.setAttribute("expanded", true)
    } else {
        nav.setAttribute("data-visible", false)
        navToggle.setAttribute("expanded", false)
    }
})