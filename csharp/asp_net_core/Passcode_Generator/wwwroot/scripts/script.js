$(document).ready(function(){
    if ('#count' == 1){
        $('#reset').attr("disabled", "true");
    } else {
        $('#reset').removeAttr("disabled");
    }
    function newPasscode(){
        $.get('/passcode', function(response){
            $('#count').text(response.count);
            $('#random').text(response.passcode);
            if (response.count == 1){
                $('#reset').attr("disabled", "true");
            } else {
                $('#reset').removeAttr("disabled");
            }
        });
    }
    $('#generate').click(function(){
        newPasscode();
    });
    $('#reset').click(function(){
        $.get('/reset', function(){
            newPasscode();
        });
        
    });
});