$(document).ready(function () {

    // header fixed
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 1) {
            $("#change-logo").attr("src", "images/logo/Blockoville_Logo_Blue.png");
            $('.navigation-wrap').addClass('fixed-header');
            $('.nav-link').addClass('blue-after');
            $('.login-btn a').addClass('primary-white');
            $('.menu-icon').addClass('fill-white');
            // $('.navbar-collapse').addClass('bg-white');
            $('.header-bake').addClass('pt-100');
            $('.page-title-inner').addClass('pt-100');
            $('.left-bg .home-wrap').addClass('pt-100');
        } else if(screen.width >= 992) {
            $("#change-logo").attr("src", "images/logo/Blockoville_Logo_White.png");
            $('.navigation-wrap').removeClass('fixed-header');
            $('.nav-link').removeClass('blue-after');
            $('.login-btn a').removeClass('primary-white');
            $('.menu-icon').removeClass('fill-white');
            // $('.navbar-collapse').removeClass('bg-white');
            $('.header-bake').removeClass('pt-100');
            $('.page-title-inner').removeClass('pt-100');
            $('.left-bg .home-wrap').removeClass('pt-100');
        }
    });
    if (screen.width <= 991) {
        $("#change-logo").attr("src", "images/logo/Blockoville_Logo_Blue.png");
        $('.navigation-wrap').addClass('fixed-header');
        $('.nav-link').addClass('blue-after');
        $('.login-btn a').addClass('primary-white');
        $('.menu-icon').addClass('fill-white');
        $('.header-bake').addClass('pt-100');
        $('.page-title-inner').addClass('pt-100');
        $('.left-bg .home-wrap').addClass('pt-100');
        // $('.navbar-collapse').addClass('bg-white');
    }

    
    // tabs
    // tabs
        const IS_SELECTED = 'is-selected',
        $tab = $('.tab'),
        $tabContent = $('.tab-content');

        let tabsFunction = (e) => {

        let el = $(e.currentTarget),
            target = $(el).attr('data');

        $tab.removeClass(IS_SELECTED);
        $(el).addClass(IS_SELECTED);
        $tabContent.removeClass(IS_SELECTED);
        $(target).addClass(IS_SELECTED);

        }

        $tab.on('click', tabsFunction);


        $('.input-group input').focus(function(){
            $(this).parent('.input-group').addClass('active');
        });

        $('.input-group input').focusout(function(){
            $(this).parent('.input-group').removeClass('active');
        });


});