$(document).ready(function(){
    var temp;
    $("img").hover(function() {
            $( this ).attr('src', './on.png');
        }, function() {
            $( this ).attr('src', './off.png');
    });
});