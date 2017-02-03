//menu toggle

$(document).ready(function () {

    //dropdown-menu navbar
    // $('ul.nav li.dropdown.full-width').hover(function () {
    //         $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(200);
    //     },
    //     function () {
    //         if (!$(this).hasClass('open'))
    //             $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(200);
    //     });

    // var url = "http://google.com";
    // console.log($('#testComplete').attr('id'));
    // $('#testComplete').on('hide.bs.modal', function() {
    //
    //     window.location.href = url;
    //     $(location).attr('href',url);
    // });


    /*
     //canvas menu
     $('.toggle-mnu').on('click', function () {
     $('.toggle-mnu').toggleClass('on');
     if ($('.toggle-mnu').hasClass('on')) {
     $('.sidebar-dashboard').addClass('open');
     $('.main-private').addClass('canvas-left');

     } else {
     $('.sidebar-dashboard').removeClass('open');
     $('.main-private').removeClass('canvas-left');

     }
     });*/


    $('.dropdown-toggle').on('click', function () {
        $('#navbar').find('navbar-toggle').removeClass('.collapsed');
    });

    //card hover .card-overlay
    $(document).on('mouseover', '.card-body', function(e){
        $(this).find('.card-overlay').addClass('is-active');
    }).on('mouseout', '.card-body', function(e){
        $(this).find('.card-overlay').removeClass('is-active');
    });

    // run test on initial page load
    checkSize();
    //chooseRegion();
    // run test on resize of the window
    $(window).resize(checkSize);

});

//Function mobile basket position
function checkSize(){
    var basket_breakpoint = 1200;
    if ($(window).width() <= basket_breakpoint){
        $('#navbar').insertAfter($('.navbar-default'));
        $('.navbar-basket').insertAfter($('.navbar-header'));
    }else{
        $('.navbar-basket').appendTo('.navbar-collapse');
        $('#navbar').insertAfter($('.navbar-header'));
    }
}
//modal chooseRegion
function chooseRegion() {
    $('.modal-choose-country').fadeToggle();
}
//modal chooseCity
function chooseCity() {
    $('.modal-choose-city').fadeToggle();
}



