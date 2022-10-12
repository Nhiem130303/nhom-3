let search_form = document.querySelector('.search_form');
document.querySelector('#menu_search').onclick=function(){
    search_form.classList.toggle('actives');
}

$(document).ready(function(){
    $('#menu_btn').click(function(){
        $('.nav_bar').slideToggle();
    });
})