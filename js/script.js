let swiper = new Swiper('.swiper',{
  slidesPerView: 5,
  breakpoints: {
    1201: {
      slidesPerView: 5,
    },
    769: {
      slidesPerView: 2,
      pagination: {
        el: '.swiper-pagination',
      },
    },
    100: {
      slidesPerView: 1,
      pagination: {
        el: '.swiper-pagination',
      },
    }
  }
})


let burger = document.querySelector(".header__item_burger")

let burgerMenu = document.querySelector(".header__burger_list")

burger.addEventListener("click", function(){
  burger.classList.toggle("header__item_burger_active")
  burgerMenu.classList.toggle("header__burger_list_active")
})


window.addEventListener("scroll", function(){
  if(scrollY >= 1) {
    document.querySelector(".header").classList.add("header__active")
  } else {
    document.querySelector(".header").classList.remove("header__active")
  }
})


let logo = document.querySelector(".header__logo")

logo.addEventListener("click", function(){
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
})
