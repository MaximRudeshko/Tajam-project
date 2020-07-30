$(document).ready(function () {
    $('.header-slider__inner').slick({
        arrows:false,
        dots:true,
        autoplay:true,
        autoplaySpeed:3000
    })

    $('.testimonials__contentbox').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.testimonials-slider__items',
      });


    $('.testimonials-slider__items').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.testimonials__contentbox',
        arrows: false,
        centerMode:true,
        focusOnSelect: true,
        draggable:false,
        arrows:true,
        variableWidth:true,
        responsive: [
            {
                breakpoint:540,
                settings:{
                    variableWidth:false,
                    slidesToShow:3
                }
            }
        ]
        
    }); 

    


});