
        

$(document).ready(function() {
    var API = 'http://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid=2502265&format=json';
    jQuery.getJSON(API, null, function(data) {
        console.log(data);
        var forecast = data.query.results.channel.item.forecast;


        // Create a variable called html
        // set html equal to a string that starts an html table
        var html = '<table style="width:100%">';

        // Create string variables for each item property
        // set each item property equal to a string with a <tr> tag
         var date = '<tr>';
         var day = '<tr>';
         var text = '<tr>';
         var low = '<tr>';
         //var high = '<tr>';


        for (i = 0; i < forecast.length; i++) {
            // create a variable called item and set it equal to forecast[i]
            var item = forecast[i];
            // for each item property string variable, add <td> item.property </td> as a string to the variable
            date += '<td>'+item.date+'</td>';
            day += '<td>'+item.day+'</td>';
            text += '<td>'+item.text+'</td>';
            low += '<td>'+item.low+'/'+item.high+'</td>';
            //high += '<td>'+item.high+'</td>';
        }

        // for each item property string add a </tr> tag
        date += '</tr>';
        day += '</tr>';
        text += '</tr>';
        low += '</tr>';
        //high += '</tr>';

        // add each item property string to the main html string variable
        html += date+day+text+low;

        // close out the table by adding </table> to the main html string variable
        html += '</table>';

        $("body").append(html)
    })
    
});