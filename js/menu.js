/**
 * Created by Stefan on 11/08/2016.
 */
$(document).ready(function () {
 // when loading the page menu hide
    $('.menu-header').addClass('hiddenmenu');

    $('.showmenu-btn').click(function(){
        $('.menu-header').toggleClass('hiddenmenu');
    });

    $('.closemenu-btn').click(function(){
        $('.menu-header').toggleClass('hiddenmenu');
    });
});
