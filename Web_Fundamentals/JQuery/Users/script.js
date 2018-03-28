$(document).ready(function(){
    var info;
    var arr;
    var temp;
    $("#addUser").submit(function(){
        info = $(this).serialize().replace(/%40/g,"@");
        arr = info.split("&");
        for(var i = 0; i < arr.length; i++){
            temp = arr[i].split("=");
            console.log($(this).parent().parent('th[name="' + temp[0] + '"]'));
            $('th[name="' + temp[0] + '"]').append(temp[1] + "<br>");
        }
        return false;
    })
})