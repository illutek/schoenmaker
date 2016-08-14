/**
 * Created by Stefan on 13/08/2016.
 */
/** Was eerste oplossing, niet proper, oplossing 'first-child'.
 * $('#core__shoemakingDIV').show();
 * $('#core__keysDIV').hide();
 * $('#core__engravingDIV').hide();
 * $('#core__carplatesDIV').hide();
 */

$(document).ready(function () {
    // when loading the page all core business hide except shoemaking
    $('.section-core-business-info .content:not(:first-child)').hide();

    $('.circle').on('click', function(e) {
        e.preventDefault();
        $('.content').hide();
        $('#'+this.id+'DIV').show();
        //console.log(this);
    });
});
