const sliderWrap = document.querySelector('.tistimonials-slider__items'),
      sliderItems = sliderWrap.children
      prev = document.querySelector('.fa-angle-left'),
      next = document.querySelector('.fa-angle-right'),
      contentWrap = document.querySelector('.testimonials__content'),
      slideWidth = window.getComputedStyle(contentWrap).width

contentWrap.style.width = sliderItems.length * 100 + '%';
contentWrap.style.transition = 'all .2s ease'

let offset = 0


prev.addEventListener('click', () => {
    if(offset === deleteNoDigits(slideWidth) * (sliderItems.length - 1)){
        offset = 0
    }else{
        offset += deleteNoDigits(slideWidth)
    }
    
    contentWrap.style.transform = `translateX(${-offset}px)`
    

    sliderWrap.appendChild(sliderItems[0])
    setActive()
})

next.addEventListener('click', () => {
    if(offset === 0){
        offset = deleteNoDigits(slideWidth) * (sliderItems.length - 1)
    }else{
        offset -= deleteNoDigits(slideWidth)
    }

    contentWrap.style.transform = `translateX(${-offset}px)`

    let elem = sliderItems[sliderItems.length - 1]
    sliderWrap.insertBefore(elem, sliderItems[0])
    setActive()
})

function setActive() {
    const activeIndex = Math.floor(sliderItems.length / 2)
    for( let i = 0; i < sliderItems.length - 1; i++){
        sliderItems[i].classList.remove('active')
    }
    sliderItems[activeIndex].classList.add('active')
}

function deleteNoDigits(str){
    return +str.replace(/\D/g, '')
}




