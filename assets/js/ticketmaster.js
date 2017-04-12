

var url = "https://app.ticketmaster.com/discovery/v2/events.json?";
var apiKey = "&apikey=UViYY1Bd5dOAhrZqbTiMxdQqBMQlycpV";
var query = "keyword=";




$("#artist-search").submit(function(event) {
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
				$("#ticket-results").append("<div class=event id=event-" + i + "><a href="+ json._embedded.events[i].url +"><h6>" + json._embedded.events[i].name + " " + json._embedded.events[i].dates.start.localDate + "</h6></a></div>");
              // Parse the response.
              // Do other things.
          }
      },
      error: function(xhr, status, err) {
              // This time, we do not end up here!
          }
      });
});



