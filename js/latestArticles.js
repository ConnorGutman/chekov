$.getJSON("/chekov/articles.json", function(data) {

  //HTML syntax assign
  var syntax = {
    "ahrefOpen": "<a href='",
    "ahrefOpen2": "'>",
    "ahrefClose": "</a>",
    "divClose": "</div>",
    "h3Close": "</h3>",
    "pClose": "</p>",
    "colOpen": "<div class='col-sm-6'>",
    "cardOpen": "<div class='card article-card'>",
    "cardImgOpen": "<img class='card-img-top' src='",
    "cardImgOpen2": "' alt='",
    "cardImgClose": "'>",
    "cardOverlay": "\n<span class='fa-stack fa-lg overlay transition'><span class='overlay-shadow'></span><i class='fa fa-circle fa-stack-2x overlay-circle'></i><i class='fa fa-chain fa-stack-1x fa-inverse overlay-icon'></i></span>\n",
    "cardBlockOpen": "<div class='card-block'>",
    "articleTagsOpen": "<p class='card-text text-xs-center article-tags'>",
    "articleTitleOpen": "<h3 class='card-title text-xs-center transition'>"
  };

  //Assign some JSON to JS variables
  var articleCount = data.Articles.length;
  var articleTitle = new Array();
  var articleTags = new Array();
  var articlePhoto = new Array();
  var articleURL = new Array();
  var assembledArticle = new Array();

  for (i = 0; i < articleCount; i++) {
    articleTitle[i] = data.Articles[i].title;
    articleTags[i] = data.Articles[i].tags;
    articlePhoto[i] = data.Articles[i].photo;
    articleURL[i] = "/posts/" + data.Articles[i].url + ".html";
  }

  for (i = 0; i < articleCount; i++) {
    assembledArticle[i] = syntax.ahrefOpen + articleURL[i] + syntax.ahrefOpen2 + syntax.cardOpen + syntax.cardImgOpen + articlePhoto[i] + syntax.cardImgOpen2 + "caption" + syntax.cardImgClose + syntax.cardOverlay + syntax.cardBlockOpen + syntax.articleTagsOpen + articleTags[i] + syntax.pClose + syntax.articleTitleOpen + articleTitle[i] + syntax.h3Close + syntax.divClose + syntax.divClose + syntax.ahrefClose;
  }

  $(document).ready(function() {
    for (i = 0; i < articleCount; i++) {
      $("#latestArticleOutput").append(syntax.colOpen + assembledArticle[i] + syntax.divClose);
    }
  });
});
