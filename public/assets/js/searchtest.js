alert("hey hey");

$("#search").on("click", function (event) {
    event.preventDefault();
    $("#searchresults").empty();

    var citysearch = $("#search-term").val();

    $.ajax("/data/" + citysearch, {
        type: "GET"
    }).then(function (data) {
        var len = data.traveller.length
        var travelsearch = data.traveller;
        console.log("search", travelsearch)
        var len = data.traveller.length
        for (var i = 0; i < len; i++) {
            var travelsearch2 = data.traveller[i]
            listCount = i + 1;
            var $CitySearchDiv = $("<ul >");
            $CitySearchDiv.addClass("col-sm-3");
            $("#searchresults").append($CitySearchDiv);
            var $CitySearchlist = $("<li class='list-group-item'>");

            var Attraction = travelsearch2[i].ATTR_NAME;
            var City = travelsearch2[i].CITY
            var State = travelsearch2[i].STATE;
            if (State == undefined) {
                State = " ";
            }
            var Country = travelsearch2[i].COUNTRY;

            $CitySearchlist.append("<h3>" + "USER: " + USER + "</h3>");
            $CitySearchlist.append("<h5>" + "ATTRACTION: " + Attraction + "</h5>");
            $CitySearchlist.append("<h5>" + "CITY: " + City + "</h5>");
            $CitySearchlist.append("<h5>" + "STATE: " + State + "</h5>");
            $CitySearchlist.append("<h5>" + "COUNTRY: " + Country + "</h5>");
            $("#searchresults").append($CitySearchlist);

        };
    });
})