$.getJSON("../articles.json", function(data) {
  $("#new-post").submit(function(event) {
    //If #create is visible, run create function
    if ($('#create:visible').length != 0) {
      $("#edit-outputPostCount").val(data.Articles.length);
      submitCreate();
    } else { // else run edit function
      submitEdit();
    }

    function submitCreate() {
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
      $("#outputURL").val(url);
      var file = "text/json;charset=utf-8," + encodeURIComponent(ArticlesJSON);
      var jsonButton = "<button type='button' class='btn download-btn btn-lg transition'><i class='fa fa-download'></i><br>Download JSON<br>articles.json</button>";
      $("<h1 class='text-xs-center'><strong>Download and replace:<strong></h1><p class='text-xs-center'>" + title + "</p>").appendTo('.output');

      $('<a href="data:' + file + '" download="articles.json">' + jsonButton + '</a>').appendTo('.output');
      $(".upload-form").css("display", "none");
      event.preventDefault();
      article2json();
    }

    function submitEdit() {
      var selectedArticle = $("#edit-outputPostCount").val();
      var title = $("#title").val();
      var tags = $("#tags").val();
      var photo = $("#cover-img").val();
      var url = $("#url").val();
      var date = $("#edit-outputDate").val();
      $("#outputDate").val(date);
      var text = $("#text").val();

      data.Articles[selectedArticle].title = title;
      data.Articles[selectedArticle].tags = tags;
      data.Articles[selectedArticle].photo = photo;
      data.Articles[selectedArticle].url = url;
      data.Articles[selectedArticle].date = date;
      data.Articles[selectedArticle].text = text;

      var ArticlesJSON = JSON.stringify(data);
      var file = "text/json;charset=utf-8," + encodeURIComponent(ArticlesJSON);
      var jsonButton = "<button type='button' class='btn download-btn btn-lg transition'><i class='fa fa-download'></i><br>Download JSON<br>articles.json</button>";
      $("<h1 class='text-xs-center'><strong>Download and replace:<strong></h1><p class='text-xs-center'>" + title + "</p>").appendTo('.output');

      $('<a href="data:' + file + '" download="articles.json">' + jsonButton + '</a>').appendTo('.output');
      $(".upload-form").css("display", "none");
      event.preventDefault();
      article2json();
    }
  });
});
