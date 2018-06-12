$(document). ready(function (){
    function bettertime(time){
        return dateFns.format(time, 'h:mm A MMMM D YYYY');
    }
    $('.time').each(function(){
        $(this).html(bettertime($(this).html()));
    });
});