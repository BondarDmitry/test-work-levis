var $root = $('html, body');
$('a').click(function () {
    var href = $.attr(this, 'href');
    $root.animate({
        scrollTop: $(href).offset().top
    }, 800, function () {
        window.location.hash = href;
    });
    return false;
});

$(function () {
    $(window).scroll(function () {
        if($(this).scrollTop() !=0) {
            $('.header').css("background-color","white");
        }
        else {
            $('.header').css("background-color","transparent");
        }
    });
});

$(".header__toggle").click(function(){
    $(".navbar").slideToggle();
});


$(".catalog-models__item").click(function(){
    $(".catalog-details-item").css({
        "position":"absolute",
        "top":"-15000rem"
    });
    var c = $(this).attr("data-tab");
    $("#"+c).css({
        "position":"relative",
        "top":"0"
    });
});
$('.catalog-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true
});


$('.catalog-slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor:'.catalog-slider',
    focusOnSelect: true
});

$('.testimonials-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true
});


$(".button").click(function () {
    $("body").css("overflow-y","hidden");
    $(".form, .back").css("display","block");
});

$(".back, .form-close").click(function () {
    $("body").css("overflow-y","scroll");
    $(".form, .back").css("display","none");
});


$(".description__button-1").click(function () {
    $("body").css("overflow-y","hidden");
    $(".sizes, .back").css("display","block");
});

$(".back, .sizes-close").click(function () {
    $("body").css("overflow-y","scroll");
    $(".sizes, .back").css("display","none");
});
