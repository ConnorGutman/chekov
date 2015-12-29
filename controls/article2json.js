function article2json() {

var postCount = $("#outputPostCount").val();

var htmlOpen = "<!DOCTYPE html><html lang='en'>";

var head = "<head><!-- Required meta tags always come first --><meta charset='utf-8'><meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no'><meta http-equiv='x-ua-compatible' content='ie=edge'><meta name='article-id' content='" + postCount + "'><!-- Bootstrap CSS --><link href='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.2/css/bootstrap.min.css' rel='stylesheet' integrity='sha256-xWeRKjzyg6bep9D1AsHzUPEWHbWMzlRc84Z0aG+tyms= sha512-mGIRU0bcPaVjr7BceESkC37zD6sEccxE+RJyQABbbKNe83Y68+PyPM5nrE1zvbQZkSHDCJEtnAcodbhlq2/EkQ=='' crossorigin='anonymous'><!-- Custom CSS --><link href='https://fonts.googleapis.com/css?family=Roboto+Slab:400,700' rel='stylesheet' type='text/css'><link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css'><link rel='stylesheet' href='../css/stylesheet.css'></head><body>";

var transform = [{
  "tag": "div",
  "class": "container-fluid intro",
  "id": "top",
  "children": [{
    "tag": "div",
    "class": "row",
    "children": [{
      "tag": "div",
      "class": "col-sm-6 col-sm-offset-3",
      "children": [{
        "tag": "h1",
        "class": "text-xs-center",
        "children": [{
          "tag": "strong",
          "class": "text-xs-center",
          "html": "BEST BANK NERD"
        }]
      }, {
        "tag": "p",
        "class": "text-xs-center",
        "html": "A Nerd's take on the best of banking"
      }]
    }, {
      "tag": "div",
      "class": "col-sm-3 social text-xs-center",
      "children": [{
        "tag": "a",
        "href": "#",
        "children": [{
          "tag": "span",
          "class": "fa-stack fa-lg",
          "children": [{
            "tag": "i",
            "class": "fa fa-circle fa-stack-2x fb-circle transition",
            "html": ""
          }, {
            "tag": "i",
            "class": "fa fa-facebook fa-stack-1x fa-inverse",
            "html": ""
          }]
        }]
      }, {
        "tag": "a",
        "href": "#",
        "children": [{
          "tag": "span",
          "class": "fa-stack fa-lg",
          "children": [{
            "tag": "i",
            "class": "fa fa-circle fa-stack-2x tw-circle transition",
            "html": ""
          }, {
            "tag": "i",
            "class": "fa fa-twitter fa-stack-1x fa-inverse",
            "html": ""
          }]
        }]
      }, {
        "tag": "a",
        "href": "#",
        "children": [{
          "tag": "span",
          "class": "fa-stack fa-lg",
          "children": [{
            "tag": "i",
            "class": "fa fa-circle fa-stack-2x gp-circle transition",
            "html": ""
          }, {
            "tag": "i",
            "class": "fa fa-google-plus fa-stack-1x fa-inverse",
            "html": ""
          }]
        }]
      }, {
        "tag": "a",
        "href": "#",
        "children": [{
          "tag": "span",
          "class": "fa-stack fa-lg",
          "children": [{
            "tag": "i",
            "class": "fa fa-circle fa-stack-2x em-circle transition",
            "html": ""
          }, {
            "tag": "i",
            "class": "fa fa-envelope fa-stack-1x fa-inverse",
            "html": ""
          }]
        }]
      }]
    }]
  }, {
    "tag": "div",
    "class": "row",
    "html": ""
  }]
}, {
  "tag": "nav",
  "class": "navbar navbar-static-top",
  "children": [{
    "tag": "button",
    "class": "navbar-toggler hidden-sm-up pull-right",
    "type": "button",
    "data-toggle": "collapse",
    "data-target": "#test",
    "html": "&#9776;"
  }, {
    "tag": "div",
    "class": "collapse navbar-toggleable-xs",
    "id": "test",
    "children": [{
      "tag": "ul",
      "class": "nav navbar-nav pull-center",
      "children": [{
        "tag": "li",
        "class": "nav-item",
        "children": [{
          "tag": "a",
          "class": "nav-link",
          "href": "../index.html",
          "children": [{
            "tag": "span",
            "class": "sr-only",
            "html": "(current)"
          }]
        }]
      }, {
        "tag": "li",
        "class": "nav-item",
        "children": [{
          "tag": "a",
          "class": "nav-link",
          "href": "../about.html",
          "html": "ABOUT"
        }]
      }, {
        "tag": "li",
        "class": "nav-item",
        "children": [{
          "tag": "a",
          "class": "nav-link",
          "href": "../checklist.html",
          "html": "CHECKLIST"
        }]
      }, {
        "tag": "li",
        "class": "nav-item",
        "children": [{
          "tag": "a",
          "class": "nav-link",
          "href": "../archive.html",
          "html": "ARCHIVE"
        }]
      }]
    }]
  }]
}, {
  "tag": "div",
  "class": "container-fluid content",
  "id": "",
  "children": [{
    "tag": "div",
    "class": "row",
    "children": [{
      "tag": "div",
      "class": "col-sm-4 side-bar",
      "id": "relatedArticleOutput",
      "children": [{
        "tag": "div",
        "class": "card side-card ad-card",
        "children": [{
          "tag": "img",
          "class": "card-img-top side-bar-ad",
          "src": "http://placehold.it/336x280",
          "html": ""
        }, {
          "tag": "div",
          "class": "card-block",
          "children": [{
            "tag": "h4",
            "class": "card-title",
            "html": "Our Sponsors"
          }]
        }]
      }, {
        "tag": "div",
        "class": "card side-card related-card",
        "children": [{
          "tag": "div",
          "class": "card-block",
          "children": [{
            "tag": "h2",
            "class": "card-title text-xs-center",
            "html": "RELATED STORIES"
          }]
        }]
      }]
    }, {
      "tag": "div",
      "class": "col-sm-8 article-content",
      "children": [{
        "tag": "h1",
        "class": "card-title",
        "html": "${title}"
      }, {
        "tag": "p",
        "children": [{
          "tag": "span",
          "html": "By "
        }, {
          "tag": "a",
          "class": "author",
          "href": "",
          "html": "Connor Gutman"
        }, {
          "tag": "span",
          "html": " on "
        }, {
          "tag": "span",
          "html": "${date}"
        }]
      }, {
        "tag": "img",
        "class": "article-cover-img",
        "src": "${photo}",
        "html": ""
      }, {
        "tag": "p",
        "html": "${text}"
      }]
    }]
  }]
}, {
  "tag": "div",
  "id": "footer",
  "children": [{
    "tag": "div",
    "class": "container",
    "children": [{
      "tag": "p",
      "class": "copyright",
      "html": "2015 © copyright ",
      "children": [{
        "tag": "span",
        "html": "${site-name}"
      }, {
        "tag": "span",
        "html": ". All rights reserved."
      }]
    }, {
      "tag": "div",
      "class": "col-sm-4",
      "children": [{
        "tag": "h4",
        "html": "ABOUT"
      }, {
        "tag": "p",
        "html": "Hello, my name is Connor and I'm a certified nerd. I'm a software engineer who just wants a good bank to use. I mainly tackle reviews from a technological standpoint and I'm looking for simplicity / quality of the features a banks offers."
      }]
    }, {
      "tag": "div",
      "class": "col-sm-2 col-footer-nav",
      "children": [{
        "tag": "h4",
        "html": "LINKS"
      }, {
        "tag": "ul",
        "class": "nav footer-nav",
        "children": [{
          "tag": "li",
          "class": "nav-item",
          "children": [{
            "tag": "a",
            "class": "nav-link",
            "href": "../index.html",
            "html": "HOME"
          }]
        }, {
          "tag": "li",
          "class": "nav-item",
          "children": [{
            "tag": "a",
            "class": "nav-link",
            "href": "../about.html",
            "html": "ABOUT"
          }]
        }, {
          "tag": "li",
          "class": "nav-item",
          "children": [{
            "tag": "a",
            "class": "nav-link",
            "href": "../checklist.html",
            "html": "CHECKLIST"
          }]
        }, {
          "tag": "li",
          "class": "nav-item",
          "children": [{
            "tag": "a",
            "class": "nav-link",
            "href": "../archive.html",
            "html": "ARCHIVE"
          }]
        }]
      }]
    }, {
      "tag": "div",
      "class": "col-sm-2 col-footer-nav",
      "children": [{
        "tag": "h4",
        "html": "SOCIAL"
      }, {
        "tag": "ul",
        "class": "nav footer-nav",
        "children": [{
          "tag": "li",
          "class": "nav-item",
          "children": [{
            "tag": "a",
            "class": "nav-link",
            "href": "#",
            "html": ""
          }, {
            "tag": "a",
            "class": "nav-link",
            "href": "#",
            "html": "Facebook"
          }]
        }, {
          "tag": "li",
          "class": "nav-item",
          "children": [{
            "tag": "a",
            "class": "nav-link",
            "href": "#",
            "html": "Twitter"
          }]
        }, {
          "tag": "li",
          "class": "nav-item",
          "children": [{
            "tag": "a",
            "class": "nav-link",
            "href": "#",
            "html": "Google+"
          }]
        }, {
          "tag": "li",
          "class": "nav-item",
          "children": [{
            "tag": "a",
            "class": "nav-link",
            "href": "#",
            "html": "Email"
          }]
        }]
      }]
    }, {
      "tag": "div",
      "class": "col-sm-3 col-footer-nav",
      "children": [{
        "tag": "h4",
        "html": "Other Links"
      }, {
        "tag": "ul",
        "class": "nav footer-nav",
        "children": [{
          "tag": "li",
          "class": "nav-item",
          "children": [{
            "tag": "a",
            "class": "nav-link",
            "href": "#",
            "html": "Parent Site"
          }]
        }, {
          "tag": "li",
          "class": "nav-item",
          "children": [{
            "tag": "a",
            "class": "nav-link",
            "href": "#",
            "html": "My Site"
          }]
        }, {
          "tag": "li",
          "class": "nav-item",
          "children": [{
            "tag": "a",
            "class": "nav-link",
            "href": "#",
            "html": "Github"
          }]
        }]
      }]
    }]
  }]
}, {
  "tag": "script",
  "src": "https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js",
  "html": ""
}, {
  "tag": "script",
  "src": "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.2/js/bootstrap.min.js",
  "integrity": "sha256-GMscmjNs6MbZvXG2HRjP3MpdOGmXv078SRgH7M723Mc= sha512-1wnhBRtA+POGVA0yREk2RlDbJEdkNvMuRBGjT1FCI5wXmpiQHZWDIB8MpANBWM/GKSPDgCA/7HTrAIFgv70/Jw==",
  "crossorigin": "anonymous",
  "html": ""
}, {
  "tag": "script",
  "src": "../js/relatedArticles.js",
  "html": ""
}];

//var site-name = "";
var title = $("#title").val();
var date = $("#outputDate").val();
var photo = $("#cover-img").val();
var text = $("#text").val();

var data = [{
  'site-name': 'Best Bank Nerd',
  'title': title,
  'date': date,
  'photo': photo,
  'text': text
}];

var htmlClose = "</body></html>";

var body = json2html.transform(data, transform);
var html = htmlOpen + head + body + htmlClose;
$("textarea#outputHtml").val(html);

}
