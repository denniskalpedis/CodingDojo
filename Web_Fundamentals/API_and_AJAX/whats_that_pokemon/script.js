$(document).ready(function(){
    var data;
    var temp;
    var id;
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
    // function getImages(i){
    //     $.get( "https://pokeapi.co/api/v2/pokemon/" + (i) + "/", function( data ) {
    //         $('#pokemon' + i)
    //             .html(data.name + '<img src=' + data.sprites.front_default + ' alt="pokemon" back="' + data.sprites.back_default + '" class="images">');
    //     }, "json" );
    // } API call to get images
    for(var i = 1; i <= 151; i++){
        $('#pictures').append('<div id="pokemon' + i + '"></div>');
        //getImages(i); API call to get images
        $('#pokemon' + i).append('<img src=https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + i +'.png alt="pokemon" back="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/' + i + '.png" class="images" index="' + i + '">');
        
    }
    $('[id^=pokemon]').on({  //just tying old assignments in
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
    $('[id^=pokemon]').on("click", ".images", function(){
        id = $(this).attr("index");
        $.get( "https://pokeapi.co/api/v2/pokemon/" + (id) + "/", function( data ) {
            $('#information').html('<h2>' + data.name + '</h2> <img src=' + data.sprites.front_default + ' alt="pokemon" back="' + data.sprites.back_default + '" class="images">');
            $('#information').append('<p class="title">Types</p><p class="info"><ul id="types"></ul></p>');
            for (i = 0; i < data.types.length; i++) {
                $('#information ul').append('<li>' + data.types[i].type.name + '</li>');
            }
            $('#information').append('<p class="title">Height</p><p class="info">' + data.height + '</p><p class="title">Weight</p><p class="info">' + data.weight + '</p>');
         }, "json" );
    });
});
