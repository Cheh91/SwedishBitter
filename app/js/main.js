$(function () {

    $('.list__wrapper .tab').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.list__wrapper').find('.tab-item').removeClass('active-tab').hide();
        $('.list__wrapper .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });


    $('.wrapper__reviews .tab__reviews').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.wrapper__reviews').find('.tab-page').removeClass('active-tab').hide();
        $('.wrapper__reviews .tabs__reviews').find('.tab__reviews').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });




});