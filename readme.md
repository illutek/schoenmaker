#Werkwijze en een aantal opmerkingen

##Bower
Een eerste project waar ik bower gebruik.   
bower.json - file met de nodige pakketten (dependencies)  
.bowerrc file - (config file) nu in dit geval niet echt nodig, omdat ik de direcotory instel op de 
default "bower_components"

##Video
Opmerking, bij het opzetten van de html stuctuur werdt de video niet geloopt, zou in chrome een bug zijn,  
de volgorde van oproepen video files gaf hier de oplossing.

```
<source src="../../video/video_schuren.webm" type="video/webm">
<source src="../../video/video_schuren.mp4" type="video/mp4">
```


