$(document).ready(() => {
    let body = $("body");

    function set_back(id) {
        let body = $('body');

        let w = $('#man').width();
        $('#man').height(w);
    }

    set_back('contact');
    //$('.consult_form input[type=text]').css('width', 0.49 * $('.consult_form input[type=email]').width() + 'px');
    $(window).resize(() => {
        set_back('contact');
    });

    let news_div = $('#news_n_articles');
    for (let i = 0; i < 3; i++){
        let newsbox = $('<div class="newsbox"></div>');
        news_div.append(newsbox);
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


});


