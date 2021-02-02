$(document).ready(() => {
    let body = $("body");

    function set_back(id) {
        let body = $('body');
        let img = document.createElement('img');//$("<img>");
        let back = $('#' + id);
        let url = back.css('background-image').split('"')[1];

        //alert(url);
        $(img).attr('src', url);
        let img_ratio = 0;
        document.body.appendChild(img);
        let w = $(img).width();
        let h = $(img).height();
        img.onload = function(){
            w = $(this).width();
            h = $(this).height();
            img_ratio = h / w;
            back.height(body.width() * img_ratio);
            back.css('background-size', body.width() + 'px ' + (body.width() * h/w) + 'px');
            $(img).remove();
        };

        if ($(this).width() >= 1200)
            $('#appeal_cover').width($('.consult_form').width());

    }

    set_back('contact');
    //$('.consult_form input[type=text]').css('width', 0.49 * $('.consult_form input[type=email]').width() + 'px');
    $(window).resize(() => {
        set_back('contact');
    });


});


