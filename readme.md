#Werkwijze en een aantal opmerkingen

##Bower
Een eerste project waar ik bower gebruik.   
bower.json - file met de nodige pakketten (dependencies)  
.bowerrc file - (config file) nu in dit geval niet echt nodig, omdat ik de direcotory instel op de 
default "bower_components"

##Video
Dit verhaal gaat niet door.
Een JavaScript oplossing toegepast om de video responsief te maken http://jsfiddle.net/bosspetta/wokoyytv/ 

##Fontawesome
Icon url toegevoegd in de scss via een mixin
```
@mixin url {
  &:before {
    font-family: FontAwesome;
    content: "\f08e";
    display: inline-block;
    padding-right: 3px;
  }
  &:hover {
    &:before {
      font-family: FontAwesome;
      content: "\f14c";
      display: inline-block;
      padding-right: 5px;
    }
  }
}
```

##WOW.js


##SASS
http://sass-lang.com/documentation/Sass/Script/Functions.html


###TODO
####Contact page
De page-contact.html zal het webform of contact form gaan bevatten in de Drupal 8 omgeving

####Acties
Titel van de actie, eventueel korte info en mogelijkheid om een pdf te downloaden met de actie.

##Contactform opmaak
Het default contact form gebruikt opmaken via form_alter (schoen.theme)
Ook een eigen class toegevoegd custom__height enkel bij de input field, bij de textarea (message)
het attributes - rows
```
// Name
  $form['name']['#prefix'] = '<div class="form-group">';
  $form['name']['#suffix'] = '</div>';
  $form['name']['#attributes']['placeholder'][] = $form['name']['#title'].'*';
  $form['name']['#attributes']['class'][] = 'form-control custom__height';
  unset($form['name']['#title']);
```
Bron: http://drupal.stackexchange.com/questions/159154/drupal-8-theme-a-contact-form

###BEM
Notatie wel gebruikt maar niet echt volgens de regels ga dit bij een volgende beter moeten doen.
Bron: 
http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/

  

