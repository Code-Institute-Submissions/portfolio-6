$(document).ready(function(){
    $('.nav-toggle').click(function(){
        $('.nav-toggle').toggleClass('active');
        $('.menu-list').toggleClass('menu-list-visible', 1000);
        $('.menu-list-item').each(function(i) {
            setTimeout(function() {
              $('.menu-list-item').eq(i).toggleClass('slide-in');
            }, (700 * (Math.exp(i * 0.2))) - 700);
          });
    })
});