function locationSuccess(position) {

	var geoAPI = 'http://query.yahooapis.com/v1/public/yql?q=select%20item%20from%20weather.forecast%20where%20location%3D%2222102%22&format=json'

	$.getJSON(geoAPI, function(r){

		if(r.ResultSet.Found == 1){

				if(r.query.count == 1){

					var item = r.query.results.channel.item.condition;
					addWeather(item.code, "Now", item.text + ' <b>'+item.temp);

					for (var i=0;i<2;i++){
						item = r.query.results.channel.item.forecast[i];
						addWeather(
							item.code,
							item.day +' <b>'+item.date.replace('\d+$','')+'</b>',
							item.text + ' <b>'+item.low+' / '+item.high+'</b>'
						);
					}

					location.html(city+', <b>'+code+'</b>');

					weatherDiv.addClass('loaded');

				}
			}

		}

		function addWeather(code, day, condition){

	var markup = '<li>'+
		'<img src="assets/img/icons/'+ weatherIconMap[code] +'.png" />'+
		' <p class="day">'+ day +'</p> <p class="cond">'+ condition +
		'</p></li>';

	scroller.append(markup);
}