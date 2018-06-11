$(document). ready(function (){
    
    var socket = io(); //1

    socket.on('color', function(data) {
        $('body').css('background-color', data.color);
    });
    $('#green').click(function(e)
    {
        socket.emit('green');
    });
    $('#blue').click(function(e)
    {
        socket.emit('blue');
    });
    $('#pink').click(function(e)
    {
        socket.emit('pink');
    });
});