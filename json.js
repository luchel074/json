$(document).ready(function() {


    $.getJSON("data.json", function(data) {
        console.log("getjson staretad");
        console.log(data);
        
        console.log(data.Namn);
        $( "<h1>Hejsan</h1>" ).appendTo("div");
        $("<h2>Vad händer </h2>").appendTo("div");
        $("<p>lorem ipsum</p>").appendTo("div");
        $("<h3>hej</h3>").appendTo("div");
        console.log(data.år,data.månad,data.dag);
        $("<h5>..</h5>").appendTo("div");
        console.log(data.Namn,data.Ålder,data.dag);
        var objekt = $.makeArray(data.Namn,data.dag,data.månad);
    });//getjson



}); //slut docready
