$(document).ready(function () {
    $('.header-slider__inner').slick({
        arrows:false,
        dots:true,
        autoplaySpeed:300,
        autoplay:true
    })
    $('.testimonials__contentbox').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.testimonials-slider__items',
      });


    $('.testimonials-slider__items').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.testimonials__contentbox',
        arrows: false,
        centerMode:true,
        focusOnSelect: true,
        draggable:false,
        arrows:true
        
    }); 

    


});