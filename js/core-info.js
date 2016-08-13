/**
 * Created by Stefan on 13/08/2016.
 */
$(document).ready(function () {
    // when loading the page all core business hide except shoemaking
    $('#core__shoemakingDIV').show();
    $('#core__keysDIV').hide();
    $('#core__engravingDIV').hide();
    $('#core__carplatesDIV').hide();

    $('.circle').on('click', function(e) {
        e.preventDefault();
        $('.content').hide();
        $('#'+this.id+'DIV').show();
        //console.log(this);
    });

});
