$(document).ready(() => {
    let body = $("body");

    function set_back(id) {
        let body = $('body');


        if ($(this).width() <= 800) {
            $('.table800l').show();
            $('.table800g').hide();
        }
        else {
            $('.table800l').hide();
            $('.table800g').show();
        }

        let w = $('#man').width();
        $('#man').height(w);
    }

    set_back();
    $(window).resize(() => {
        set_back();
    });

    let news_div = $('#news');
    for (let i = 0; i < 3; i++){
        let newsbox = $('<div class="newsbox"></div>');
        news_div.append(newsbox);
        let img = $('<img>');
        img.attr('src', './newsimg.png');
        newsbox.append(img);
        let topic = $('<h3></h3>');
        topic.html('LOREM IPSUM');
        newsbox.append(topic);
        let news = $('<p></p>');
        news.html("It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.....");
        newsbox.append(news);
        let read_more = $("<a>READ MORE</a>");
        read_more.attr('href', '#');
        newsbox.append(read_more);
    }

    $('.menu_trig').click(() => {
        if($('#menu').css('display') == 'none') {
            $('#menu').css({
                'display': 'flex'
            });
            $('header').css('height', 'auto');
        }
        else {
            $('#menu').css('display', 'none');
            $('header').css('height', $('#logo').outerHeight(true) + 70 + 'px');
        }
    });
});


