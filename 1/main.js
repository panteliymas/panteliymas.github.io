$(document).ready(() => {
    let body = $("body");


    let back1 = $('#contact');
    let url = back1.css('background-image').split('"')[1];
    let img = $("<img>");
    img.attr("src", url);
    img.css("width", "100%")
    body.append(img);
    let w = img.width(), h = img.height();
    back1.height(back1.width() * h/w);
    img.remove();


    let back2 = $('#testimonails');
    url = back1.css('background-image').split('"')[1];
    img.attr("src", url);
    img.css("width", "100%");
    body.append(img);
    w = img.width();
    h = img.height();
    back2.height(back1.width() * h/w);
    img.remove();

    delete img;
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