


var apiURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=";
var apikey = "&api-key=4d4GyNsASxu5AAQKfKGSS0A9gOvDyxbq";
var searchTerm = "GWU&begin_date=2019&end_date=2020";
var recordNUM = $("#records").val() || 5;
var startYear = $("#startY").val();
var endYear = $("#endY").val();
var queryURL = apiURL + toString(searchTerm) + apikey;




$.ajax({

    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
    for (var i = 0; i < parseInt(recordNUM); i++) {
        var headline = response.response.docs[i].headline.print_headline
        var artURL = response.response.docs[i].web_url
        // var link = $("<a>").attr("")
        $("#articles").append(`<li class="listItem"> <a href=${artURL} target="_blank"><h1 class="headline">${headline}</h1></a> </li>`);
    }

});