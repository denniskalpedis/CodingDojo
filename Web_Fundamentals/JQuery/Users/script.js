$(document).ready(function(){
    var info;
    var arr;
    var temp;
    $("#addUser").submit(function(){
        info = $(this).serialize().replace(/%40/g,"@");
        arr = info.split("&");
        for(var i = 0; i < arr.length; i++){
            temp = arr[i].split("=");
            $("#content").append("<th name='" + temp[0] + "'>" + temp[1] + "</th>");
        }
        return false;
    })
})