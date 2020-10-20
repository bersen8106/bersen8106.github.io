$(function() {


    $('.rate-stars').rateYo({
        rating: 4.5,
        spacing: "5px",
        maxValue: 5,
        numStars: 5,
        starWidth: '15px',
        readOnly: true,
        ratedFill: '#F39C12',
        normalFill: "transparent",
    });

    $('.product-slider').slick({
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/icons/prew-arrow.svg" alt=""></img>',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/icons/next-arrow.svg" alt=""></img>',

    });
    $('.feed__inner').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/icons/prew-arrow.svg" alt=""></img>',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/icons/next-arrow.svg" alt=""></img>',
        responsive: [{
                breakpoint: 1152,
                settings: {
                    variableWidth: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 750,
                settings: {
                    variableWidth: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });


    $('.js-range-slider').ionRangeSlider({
        type: "double",
        min: 0,
        max: 350,
        from: 30,
        to: 300,
        prefix: "$",
    });

    $('.product-list-view').on('click', function() {
        $('.mini-card__item').addClass('list');
        $('.list-cards__wrap').addClass('list');
        $('.product-list-view').addClass('active');
        $('.product-grid-view').removeClass('active');
        $('.favorite-cards__inner').removeClass('active');
    });
    $('.product-grid-view').on('click', function() {
        $('.mini-card__item').removeClass('list');
        $('.list-cards__wrap').removeClass('list');
        $('.product-list-view').removeClass('active');
        $('.product-grid-view').addClass('active');
        $('.favorite-cards__inner').addClass('active');
    });



    $('.menu__btn').on('click', function() {
        $('.menu__list').slideToggle();
    });

    $('.menu__dropdown-col-title').on('click', function() {
        $('.menu__dropdown-inner').slideToggle();
    });

    $('.header__btn-menu').on('click', function() {
        $('.header__box').toggleClass('active');
    });

    $('.single-product__tabs .tab').on('click', function(event) {
        var id = $(this).attr('data-id');
        $('.single-product__tabs').find('.tab-item').removeClass('active-tab').hide();
        $('.single-product__tabs .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });
    // $('.user__name').on('click', function() {
    //     $('.user__menu').toggleClass('user__menu--off');
    // });

    // if (containerEl) {
    //     mixer = mixitup(containerEl, {
    //         selectors: {
    //             control: '[data-mixitup-control]'
    //         },
    //         load: {
    //             filter: '.cards__inner'
    //         }
    //     });
    // }

    // let test = $(".pagination__list li").length;
    // console.log(test);

    // let test = $(".pagination__list li").hide(function() {

    // });

    //-----------------------//

    $('.pagination__list').each(function() {
        $(this).find('.hide').hide();
    });


    var mixer = mixitup('.cards__inner');

    let map;
    let marker;
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 59.510383, lng: 16.613476 },
        zoom: 8
    });
    marker = new google.maps.Marker({
        map: map,
        position: { lat: 59.360558, lng: 18.040349 },
        icon: '../images/icons/map-marker.png',
    });

    //------------------------//


    // var mixer = mixitup('.cards__inner');

});