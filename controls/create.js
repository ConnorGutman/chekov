$.getJSON("../articles.json", function(data) {
  $("#new-post").submit(function(event) {

    //Main variables
    var postCount = data.Articles.length;
    var title = $("#title").val();
    var tags = $("#tags").val();
    var photo = $("#cover-img").val();
    var url = $("#url").val();

    //Get  Time Stamp
    var dt = new Date();
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    var humanMonth = month[dt.getMonth()];
    var humanHours = dt.getHours();
    var ampm = (humanHours >= 12) ? "PM" : "AM";
    var humanMinutes = dt.getMinutes();
    if (humanMinutes < 10) {
      humanMinutes = "0" + humanMinutes;
    }
    var date = humanMonth + " " + dt.getDate() + "th, " + dt.getFullYear() + " " + humanHours + ":" + humanMinutes + "" + ampm;

    var text = $("#text").val();

    //Push data to bottom of JSON Array
    data.Articles.push({
      title: title,
      date: date,
      tags: tags,
      photo: photo,
      url: url,
      text: text
    });
    var ArticlesJSON = JSON.stringify(data);
    $("#outputDate").val(date);
    $("#outputPostCount").val(postCount);
    $(".output").html(ArticlesJSON);
    var file = "text/json;charset=utf-8," + encodeURIComponent(ArticlesJSON);
    $('<a href="data:' + file + '" download="articles.json">download JSON</a>').appendTo('.output');
    event.preventDefault();
    article2json();
  });
});
