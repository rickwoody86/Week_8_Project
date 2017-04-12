

var url = "https://app.ticketmaster.com/discovery/v2/events.json?";
var apiKey = "&apikey=UViYY1Bd5dOAhrZqbTiMxdQqBMQlycpV";





$("#artist-search").submit(function(event) {
	var query = "keyword=";
	event.preventDefault();
	$("#ticket-results").empty();
	query += $("input").val();
	$.ajax({
		type:"GET",
		url: url + query + apiKey,
		async:true,
		dataType: "json",
		success: function(json) {
			var i = 0;
			console.log(json);
			for (i = 0; i < 5; i++) {
<<<<<<< HEAD
				$("#ticket-results").append("<div class=event id=event-" + i + "><a href="+ json._embedded.events[i].url +"><h6>" + json._embedded.events[i].name + " " + json._embedded.events[i].dates.start.localDate + "</h6></a></div>");
=======
				$("#ticket-results").append("<div class=event id=event-" + i + "><a href=" + json._embedded.events[i].url + "><h6>" + json._embedded.events[i].name + "</h6></a><p> " + json._embedded.events[i]._embedded.venues[0].name + ": " + json._embedded.events[i].dates.start.localDate + "</p><p>" + json._embedded.events[i]._embedded.venues[0].city.name + "," + json._embedded.events[i]._embedded.venues[0].country.country + "</p></div>");
>>>>>>> cameron
              // Parse the response.
              // Do other things.
          }
      },
      error: function(xhr, status, err) {
              // This time, we do not end up here!
          }
      });
});



