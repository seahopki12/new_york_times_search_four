

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=";
var key = "4d4GyNsASxu5AAQKfKGSS0A9gOvDyxbq";
$.ajax({
    url: queryURL + key,
    method: "GET"
}).then(function (response) {
    console.log(response);
});