$(document).ready(function(){
    $('.nav-toggle').click(function(){
        $('.nav-toggle').toggleClass('active');
        $('.menu-list').toggleClass('menu-list-visible', 1000);
    })
});