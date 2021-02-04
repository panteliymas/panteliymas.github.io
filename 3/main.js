$(document).ready(() => {
    let body = $("body");

    function set_back() {

        if ($(this).width() >= 1200)
            $('#appeal_cover').width($('.consult_form').width());
        else
            $('#appeal_cover').css('width', '100%');

        if ($(this).width() <= 800) {
            $('.table800l').show();
            $('.table800g').hide();
        }
        else {
            $('.table800l').hide();
            $('.table800g').show();
        }
    }

    set_back();
    //$('.consult_form input[type=text]').css('width', 0.49 * $('.consult_form input[type=email]').width() + 'px');
    $(window).resize(() => {
        set_back();
    });

    $('.menu_trig').click(() => {
        if($('#menu').css('display') == 'none') {
            $('#menu').css({
                'display': 'flex',
                'flex-direction': 'column'
            });
            $('header').css('height', 'auto');
        }
        else {
            $('#menu').css('display', 'none');
            $('header').css('height', '70px');
        }
    });

});


