$(document).ready(function(){
    var data;
    var temp;
    // (function myLoop (i) {          
    //     setTimeout(function () {     
    //         data = $.ajax({
    //         header: { 'Pokemon images': 'images' },
    //         url: "https://pokeapi.co/api/v2/pokemon/" + (i+124) + "/",
    //         success: function(data){
    //            $('#wrapper').append('<div class="pokemon">' + data.name + '<img src=' + data.sprites.front_default + ' alt="pokemon" back="' + data.sprites.back_default + '" class="images">');
    //         }
    //     })              
    //     if (--i) myLoop(i);
    //     }, 3000)
    //  })(15);
    for(var i = 1; i <= 151; i++){
        $('#wrapper').append('<div class="pokemon"><img src=https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + i +'.png alt="pokemon" back="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/' + i + '.png" class="images">');
    }
    $(".pokemon").on({
        mouseenter: function() {
            temp = $(this).attr("src");
            $(this).attr("src", $(this).attr("back"));
            $(this).attr("back", temp);
        },
        mouseleave: function() {
            temp = $(this).attr("src");
            $(this).attr("src", $(this).attr("back"));
            $(this).attr("back", temp);
        },
    }, ".images");

})
