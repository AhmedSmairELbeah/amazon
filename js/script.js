// show list language

let mylink = document.getElementById("link-one"),

    languageMe = document.getElementById("language-me");

    mylink.onclick = () => {

        languageMe.classList.toggle("show");

    };

// show list Account

let showAcconut = document.getElementById("show-Acconut"),

Account = document.getElementById("Account");

showAcconut.onclick = function(){

    Account.classList.toggle("show")

};

// Accordion

let accordion = document.getElementsByClassName("contentBox");

for(let i = 0 ; i<accordion.length; i++)
{
    accordion[i].addEventListener('click' , function(){
        this.classList.toggle('active');
    });
}

//slider
$('.bxslider').bxSlider({

    pager :false
});

//show menu-bar

$(".footer-top .btn-menu-bar").click(function(){

    $("#menu-bar").fadeIn(200);
    $("body").css("overflow" , "hidden")
    
});

$("#close-menu").click(function(){
    
    $("#menu-bar").fadeOut(200)
    $("body").css("overflow" , "visible")
    
});

//show pope location

$(".location").click(function(){

    $(".pope-location").fadeIn(200);
    $("body").css("overflow" , "hidden")
    
});

$(".close-pope").click(function(){

    $(".pope-location").fadeOut(200);
    $("body").css("overflow" , "visible")
    
});