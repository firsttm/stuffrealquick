$(document).ready(function(){
    $('.jumbo > div:gt(0)').hide();

    setInterval(function(){
        $('.jumbo > div:first')
            .fadeOut(1000)
            .next()
            .fadeIn(1000)
            .end()
            .appendTo('.jumbo');
    }, 3000);
});

