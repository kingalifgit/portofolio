const navMenu = document.querySelector("#navMenu")
const btnHamburger = document.querySelector("#hamburger")
btnHamburger.addEventListener("click", () => {
  navMenu.classList.toggle("hidden")

  btnHamburger.classList.toggle('ham-active')
  if (btnHamburger.classList.contains("ham-active")) {
    btnHamburger.classList.remove("fa-bars")
    btnHamburger.classList.add("fa-xmark")
  } else {
    btnHamburger.classList.add("fa-bars")
    btnHamburger.classList.remove("fa-xmark")
  }
})


window.onscroll = function () {
  const nav = document.querySelector('nav')
  const fix = nav.offsetTop;

  if (window.pageYOffset > fix) {
    nav.classList.add("fixed", "w-full", "left-0", "top-0", "bg-opacity-80","rounded-b-lg", "rounded-t-none" ,"fix-nav", "right-0")
    nav.classList.remove('relative')
    // navMenu.classList.add("mr-2")
  } else {
    navMenu.classList.remove("mr-2")
    nav.classList.add('relative')
    nav.classList.remove("fixed", "fix-nav", "bg-opacity-80" ,"rounded-b-lg", "rounded-t-none")
  }
}