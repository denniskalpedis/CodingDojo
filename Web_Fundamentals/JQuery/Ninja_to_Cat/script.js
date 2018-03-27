$(document).ready(function(){
    // $('img').click(function(){
    //     $(this).css("visibility", "hidden");
    // });
    // $("#reset").click(function(){
    //     $(this).parent().children("div").children("img").css("visibility", "visible");
    // })
    var temp;
    $('img').click(function() {
        temp = $(this).attr('altsrc');
        $(this).attr('altsrc', $(this).attr('src'))
        $(this).attr('src', temp);
    });
});