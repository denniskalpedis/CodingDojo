$(document).ready(function(){
    $('img').click (function(){
        $.get( "https://anapioficeandfire.com/api/houses/?name=" + $(this).attr('housename'), function( data ) {
            console.log(data[0]);
            $('#name').html('Name: ' + data[0].name);
            $('#words').html('Words: ' + data[0].words);
            $('#titles').html('Titles: ' + data[0].titles);
         }, "json" );
    }

    )
});