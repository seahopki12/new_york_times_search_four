

var apiURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=";
var apikey = "4d4GyNsASxu5AAQKfKGSS0A9gOvDyxbq";
var searchTerm = $("#term").val();
var recordNUM = $("#records").val();
var startYear = $("#startY").val();
var endYear = $("#endY").val();
var queryURL = apiURL + apikey;
$.ajax({

    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
});