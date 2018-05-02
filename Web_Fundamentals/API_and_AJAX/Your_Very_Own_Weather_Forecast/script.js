$(document).ready(function() {
    $('form').submit(function() {
        city = $(this).serialize().replace(/\+/g," ");
        console.log(city);
        url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city.split('=')[1] + '&APPID=f7647b4706a4363ba1b1394ed7e7ef8b';
        console.log(url);
        $.get(url, function(res) {
            console.log(res);// your code here
            console.log((res.main.temp-273)*1.8+32);
            console.log(Math.round( ((res.main.temp-273)*1.8+32) * 10 ) / 10);
            $('#temp').html("Temperature: " + (Math.round( ((res.main.temp-273)*1.8+32) * 10 ) / 10) + "&#8457");
        }, 'json');
        return false;
    });
});