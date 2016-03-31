
        

$(document).ready(function() {

    var addWeather = function(item){
        var HTML="";
        HTML += item.code + "<br />";
        HTML += item.date + "<br />";
        HTML += item.day + "<br />";
        HTML += item.text + "<br />";
        HTML += item.low + "<br />";
        HTML += item.high + "<br />";

        $("body").append(HTML)

    }
    var API = 'http://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid=2502265&format=json';
    jQuery.getJSON(API, null, function(data) {
        console.log(data);
        var forecast = data.query.results.channel.item.forecast;
        for (i = 0; i < forecast.length; i++) { 
            addWeather(forecast[i]);
        }
    })

});