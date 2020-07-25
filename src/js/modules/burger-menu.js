const burger = document.querySelector('.burger'),
      menu = document.querySelector('.menu')

burger.addEventListener('click', () => {
    if(menu.classList.contains('active')){
        menu.classList.remove('active')
        burger.classList.remove('closes')
    }else{
        menu.classList.add('active')
        burger.classList.add('closes')
    }
})