$(document).ready(function(){
    $('#menu_search').click(function(event){
        $('.search_form').toggleClass('active');
    })
})

$(document).ready(function(){
    $('#menu_btn').click(function(){
        $('.nav_bar').slideToggle();
    });
})