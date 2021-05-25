function map_overlap(){
    var sum = ($('.fw-map').innerHeight() - $('.contact-details').innerHeight()) / 2;
    if (window.matchMedia('screen and (min-width: 768px)').matches) {
        $('.contact-details').css('margin-top', sum + 'px');
    } else{
        $('.contact-details').css('margin-top', '');
    };
}

var SwiperIndex = new Swiper('.slider-index', {
    slidesPerView: 3,
    spaceBetween: 40,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
        260: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
    },
    loop: true
});

$(document).ready(function() {
    $('.filter').on( 'click', function() {
        var filter = $(this).attr('data-filter');

        if ($(this).hasClass('active')) {
            $('.filter-items .col2, .filter-items .services-bg, #services-more').css('display', '');
            $(this).removeClass('active');
        } else{
            $('.filter-items .col2, .filter-items .services-bg').hide();
            $('#services-more').hide();
            $(filter).css('display', 'flex');
            $('.filter' ).removeClass( 'active');
            $(this).addClass('active');
        };
    });
    $('.slide-prev').on('click', function(){
        SwiperIndex.slidePrev();
    });
    $('.slide-next').on('click', function(){
        SwiperIndex.slideNext();
    });

    map_overlap();

    $('#nav-toggle').on( 'click', function() {
        $('.header').toggleClass('open');
    });

    $('#services-more').on( 'click', function() {
        $(this).hide();
        $('.filter-items .col2').css('display', 'flex');
    });
});