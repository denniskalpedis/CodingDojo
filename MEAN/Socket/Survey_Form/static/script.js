$(document). ready(function (){
    
    var socket = io(); //1

    socket.on('updated_message', function(data) {
        $('#form-data').html(data.msg);
    });
    socket.on('random_number', function(data){
        $('#random').html(data)
    })
    $('#form1').submit(function(e)
    {
        e.preventDefault();
        socket.emit('posting_form', {name: $('#name').val(),
                                    location: $('#location').val(),
                                    language: $('#language').val(),
                                    comment: $('#comment').val()});
        $('#name').val('');
        $('#location')[0].selectedIndex = 0;
        $('#language')[0].selectedIndex = 0;
        $('#comment').val('');
    });
    // $("#form1").submit(function(e){
    //     e.preventDefault();
    // });
});