$(document).ready(function(){
    var info;
    var arr;
    var wholeName = '';
    var description = '';
    $("#addcontact").submit(function(){
        info = $(this).serialize().replace(/\+/g," ");
        $("input[type=text], textarea").val("");
        arr = info.split("&");
        for(var i = 0; i < arr.length; i++){
            if(i==1) {
                wholeName += " "
            }
            if(i<2) {
                wholeName += decodeURIComponent(arr[i].split("=")[1]);
            } else {
                description = decodeURIComponent(arr[i].split("=")[1]); 
            }
        }
        $("#cards").append("<div class='contact_card'><h1 class='front'>" + wholeName + "</h1><p class='back'>" + description + "</p><br><h5 class='front'>click for description</h5></div>");
        wholeName = '';
        description = '';
        return false;
    })
    $('#cards').on('click', '.contact_card', function(){
        if ($(this).children('.back').css('visibility')=='hidden'){
            $(this).children('.back').css('visibility','visible');
            $(this).children('.front').css('visibility','hidden');
        } else {
            $(this).children('.front').css('visibility','visible');
            $(this).children('.back').css('visibility','hidden');
        }
    });
})