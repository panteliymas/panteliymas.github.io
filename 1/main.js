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
    }

    if ($(this).width() > 1150){
        set_back('contact');
        set_back('testimonials');

        $(window).resize(() => {
            set_back('contact');
            set_back('testimonials');
        });
    }
    else{
        $('#contact div:last-child').css({
            'width': '50%'
        });
        $('#contact').css({
            'height': $('#contact div:last-child').height() / 0.75 + 'px'
        });
        $('#testimonials').css({
            'background-size': 'auto'
        });
        $('#man').height($('#man').width());
    }


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


});


