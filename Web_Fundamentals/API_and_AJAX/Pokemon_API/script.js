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
    //}
    function getImages(i){
        $.get( "https://pokeapi.co/api/v2/pokemon/" + (i) + "/", function( data ) {
            $('#pokemon' + i)
                .html(data.name + '<img src=' + data.sprites.front_default + ' alt="pokemon" back="' + data.sprites.back_default + '" class="images">');
        }, "json" );
    }
    for(var i = 1; i <= 6; i++){ //change 6 to 151 for all
        $('#wrapper').append('<div id="pokemon' + i + '">');
        getImages(i);
        //$('#wrapper').append('<div class="pokemon"><img src=https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + i +'.png alt="pokemon" back="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/' + i + '.png" class="images">');
        
    }
    $(".pokemon").on({  //just tying old assignments in
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
