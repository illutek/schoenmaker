#Werkwijze en een aantal opmerkingen

##NPM 
Dit enkel voor de sass compliler (Gulp) en de bower install.  

##Bower
Een eerste project waar ik Bower gebruik.   
bower.json - file met de nodige pakketten (dependencies)  
Bij dit project WOW.js, Bootstrap, Font-Awesome, animate.css en jquery-stellar
.bowerrc file - (config file) nu in dit geval niet echt nodig, omdat ik de direcotory instel op de 
default "bower_components"  
http://blog.teamtreehouse.com/getting-started-bower

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
Laatste project met scss, we gaan voor sass.
http://sass-lang.com/documentation/Sass/Script/Functions.html

Zeg nu zelf wat het mooiste/gemakkellijkste uitziet  

Dit  
```
.nav {
    margin-top: 50px;
    a {
      font-size: 2.125em;
      &:hover {
        color: $light-gray;
      }
    }
  }
```
Versus volgende  
```
.nav
  margin-top: 50px
  a
    font-size: 2.125em
    &:hover
      color: $light-gray
 ```


####Acties
Titel van de actie, eventueel korte info en mogelijkheid om een pdf te downloaden met de actie.

##Contactform opmaak
Wil dit opzetten http://getbootstrap.com/css/#forms
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

  

