/**
 * Created by Stefan on 11/08/2016.
 */
$(document).ready(function () {
 // when loading the page menu hide
    $('.menu-header-main').addClass('hiddenmenu');

    $('.showmenu-btn').click(function(){
        $(this).hide();
        $('.menu-header-main').toggleClass('hiddenmenu');
    });

    $('.closemenu-btn').click(function(){
        $('.menu-header-main').toggleClass('hiddenmenu');
        $('.showmenu-btn').show();
    });
});
