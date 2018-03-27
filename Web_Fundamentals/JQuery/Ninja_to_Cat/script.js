$(document).ready(function(){
    var temp;
    $('img').click(function() {
        temp = $(this).attr('altsrc');
        $(this).attr('altsrc', $(this).attr('src'))
        $(this).attr('src', temp);
    });
});