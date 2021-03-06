//this line can cause trouble
/////////////////////////////
if(sessionStorage.getItem("language")){
    lang = (sessionStorage.getItem("language"));
}else{
    lang = "nl";
}



var arrLang = {
    "eng" : {
        'toggle': "Nederlands",
        "titleText": 'Welcome at Tijdloze momenten, \nThe picture-project!',
        "audioTest": "Use audio for a better experience"
    },
    "nl": {
        'toggle': "English",
        "titleText": `Welkom bij Tijdloze momenten, \n H\u00E9t fotoproject!`,
        "audioTest": "Gebruik audio voor een betere ervaring"
    }
}
changeWebsite();
$(function(){
    $('.translate').click(function(){
        if(lang == "nl"){
            lang = "eng";
        }else{
            lang = "nl"
        }


        changeWebsite();
    });

    

});


function changeWebsite(){
    //change flag icon
    let flag = document.getElementById("st_lngsw_fl");
    flag.src = "assets/images/other/" + lang + "_flag.png" 

    
    $('.lang').each(function(index, element){
        //change all texts
        $(this).text(arrLang[lang][$(this).attr('key')]);
        
       sessionStorage.setItem("language", lang); 
        
    });
}

/* TODO::

** MAKE ONE BUTTON FOR LANGUAGE SWITCH AND MAKE IT TOGGLE

    how this can work:

    make the lang be stored in session storage
    if(sessionStorage.getItem("language")){
        lang = (sessionStorage.getItem("language");
    }else{
        lang = "dutch"
    }


** CHANGE FLAG IMAGE

    how this can work:

    //make seperate json row for a href attribute and complete the href in html with a js variable


TODO */