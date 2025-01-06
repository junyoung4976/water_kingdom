$(function(){

    /* gnb */
    const mainHeader = $('.main-header'),
        gnb = $('#gnb'),
        gnbLi = gnb.children('li'),
        dep1 = gnbLi.children('a'),
        dep2 = dep1.next();

        gnbLi.on('mouseenter',function(){
            $(this).children('.depth2').stop().fadeIn(300)
        }).on('mouseleave',function(){
            $(this).children('.depth2').stop().fadeOut(300)
        })

    /* swiper */
    let swiper = new Swiper('#main-slide', {
        loop: true,

        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    /* tabmenu */
    const tabMenu = $('.tab-menu a')

    tabMenu.on('click',function(e){
        e.preventDefault();
        let activeTabCon = $(this).attr('href')

        $('.tab-con').hide()
        $(activeTabCon).show()

        tabMenu.removeClass('on')
        $(this).addClass('on')
    })
})