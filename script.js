$(document).ready(function(){

    $(".cart").click(function(){
        window.location='kosik.html';
    });

    if($( window ).width() < 500){
        $(".main").hide();
    }else{
        $(".phone").hide();
    }
    

    $('#owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        dots: false,
        nav: false,
        items: 1,
    })
   
});