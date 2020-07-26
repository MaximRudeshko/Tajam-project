const sliders = () =>{
    const slider = document.querySelector('.header__slider'),
          sliderWrapper = document.querySelector('.header-slider__wrapper'),
          sliderInner = document.querySelector('.header-slider__inner'),
          slides = document.querySelectorAll('.header-slider__item'),
          indicatorPanel = document.querySelector('.slider__indicators'),
          dots = document.querySelectorAll('.slider-indicators__item')

 
    let offset = 0,
        current = 0,
        sliderTimer,
        sliderWidth,
        slideWidth


    function setTransform(){
        sliderWidth = window.getComputedStyle(sliderWrapper).width
        slideWidth = deleteNoDigits(sliderWidth)

        
        sliderInner.style.width = `${slideWidth * slides.length}px`

        for(let i = 0; i < slides.length; i++){
            slides[i].style.width = slideWidth + 'px'
        }

    }

    setTransform()
    /* Functionality for auto toggle slider */

    const autoSlider = () => {
        
        sliderTimer = setInterval(() => {

            if(offset === slideWidth * (slides.length - 1)){
                offset = 0
                current = 0;
                toggleActiveSlide(current)
            }else{
                offset += slideWidth;
                current++
                toggleActiveSlide(current)
            }
            sliderInner.style.transform = `translateX(${-offset}px)`
    
        },5000)
    }

    autoSlider()


    /* Functionality for indicators */

    function toggleActiveSlide (i) {
        dots.forEach(item => {
            item.classList.remove('active')
        })
        dots[i].classList.add('active')
    }

    const bindTriggers = () => {
        dots.forEach((item) => {
            item.addEventListener('click', e => {
                current = e.target.getAttribute('data-slide')
                toggleActiveSlide(current)
                offset = current * slideWidth
                sliderInner.style.transform = `translateX(${-offset}px)`
            })
        })
    }

    bindTriggers()

    indicatorPanel.addEventListener('mouseenter', () => {
        clearInterval(sliderTimer)
    })

    indicatorPanel.addEventListener('mouseleave', () => {
        autoSlider()
    })

    /* RegExp for computed width */

    function deleteNoDigits (str){
        return +str.replace(/\D/g, '')
    }

    window.addEventListener('resize', () => {
        
        clearInterval(sliderTimer)
        setTransform()
        autoSlider()
    })

}

sliders();



