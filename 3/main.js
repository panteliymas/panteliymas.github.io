$(document).ready(() => {
    let body = $("body");

    function set_back() {

        if ($(this).width() >= 1200)
            $('#appeal_cover').width($('.consult_form').width());
        else
            $('#appeal_cover').width(100%);

    }

    set_back();
    //$('.consult_form input[type=text]').css('width', 0.49 * $('.consult_form input[type=email]').width() + 'px');
    $(window).resize(() => {
        set_back();
    });


});


