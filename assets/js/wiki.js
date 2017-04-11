/* http://stackoverflow.com/questions/36985111/using-wikipedias-api-to-fetch-results-from-search-query */
var apiURL = "https://en.wikipedia.org/w/api.php?callback=?";

$(document).ready(function() {
  $("#artist-search").submit(function() {
    $("#wiki-result").empty(); // clear prior search results 
    $.getJSON(apiURL, {
      action: 'query',
      format: 'json',
      inprop: "url",
      formatversion: 2,
      generator: 'search',
      gsrsearch: $("input").val(),
      gsrwhat: "text",
      prop: 'extracts|info',
      exsentences: 3,
      exintro: "",
      explaintext: "",        
      exlimit: 1 ,
    })
    .success(function(response) {
      console.log(response);
      response.query.pages.forEach(function(resp) {
        $("#wiki-result").append(
          "<a href='" + resp.fullurl + "' target= '_blank'><div id='result' class='results'><h3>" + resp.title + "</h3><p = class='extract'>" + resp.extract + "</p></div>");
      })
    });
  }); 
}); 