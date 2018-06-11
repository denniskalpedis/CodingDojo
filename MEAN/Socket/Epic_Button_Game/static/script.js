$(document). ready(function (){
    
    var socket = io(); //1

    socket.on('counted', function(data) {
        $('#count').html(data.number);
    });
    $('#add').click(function(e)
    {
        socket.emit('add');
    });
    $('#reset').click(function(e)
    {
        socket.emit('reset');
    });
});