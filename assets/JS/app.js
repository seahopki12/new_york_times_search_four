


var apiURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=";
var apikey = "&api-key=4d4GyNsASxu5AAQKfKGSS0A9gOvDyxbq";
var searchTerm = "";
var recordNUM = $("#inputGroupSelect01").val() || 5;
var startYear = $("&begin_date") + ("#startY").val();
var endYear = $("&end_date") + ("#endY").val();
var queryURL = apiURL + searchTerm + recordNUM + toString(startYear) + toString(endYear) + apikey;




$.ajax({

    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
    for (var i = 0; i < parseInt(recordNUM); i++) {
        var headline = response.response.docs[i].headline.print_headline
        var artURL = response.response.docs[i].web_url
        // var link = $("<a>").attr("")
        $("#articles").append(`<li> <a href=${artURL} target="_blank"><h1>${headline}</h1></a> </li>`);
    }

});