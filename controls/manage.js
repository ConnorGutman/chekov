$.getJSON("../articles.json", function(data) {
  var postCount = data.Articles.length;
  var title = new Array();
  var tags = new Array();
  var url = new Array();
  var img = new Array();
  var date = new Array();
  var text = new Array();
  var articleCount = new Array();

  for (var i = 0; i < postCount; i++) {
    title[i] = data.Articles[i].title;
    tags[i] = data.Articles[i].tags;
    url[i] = data.Articles[i].url;
    img[i] = data.Articles[i].photo;
    date[i] = data.Articles[i].date;
    text[i] = data.Articles[i].text;
    articleCount[i] = i;
    var tr = "<tr><td><a class='edit-link' articleID='" + i + "'>" + title[i] + "</a></td><td>" + date[i] + "</td><td>" + url[i] + ".html</td></tr>";
    $(tr).appendTo('#allArticles');
  };

  $(".edit-link").click(function() {
    var selectedArticle = $(this).attr('articleID');
    $("#title").val(title[selectedArticle]);
    $("#tags").val(tags[selectedArticle]);
    $("#url").val(url[selectedArticle]);
    $("#outputURL").val(url[selectedArticle]);
    $("#cover-img").val(img[selectedArticle]);
    $("#text").val(text[selectedArticle]);
    $("#edit-outputDate").val(date[selectedArticle]);
    $("#edit-outputPostCount").val(articleCount[selectedArticle]);

    $(".create").css("display", "inline");
    $(".manage").css("display", "none");
    $(".settings").css("display", "none");
    $("#create").css("display", "none");
    $('#edit').css("display", "inline");
  });

})
