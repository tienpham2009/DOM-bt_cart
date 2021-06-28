$(document).ready(function(){
    $("#hide").click(function(){
        $("p").hide();
    });
    $("#show").click(function(){
        $("p").show();
    });

    $("#move").click(function (){
        $("div").animate({left: '100px'} , "slow");
        $('div').animate({fontSize: '100px'} , "slow");
    });
});