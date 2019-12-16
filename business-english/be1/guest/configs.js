ccm.files[ "configs.js" ] = {

  "be1_guest": {
    "html": [ "ccm.load", "https://ccmjs.github.io/work-and-study/business-english/be1/resources/templates.html" ],
    "accordion": [ "ccm.component", "https://ccmjs.github.io/tkless-components/accordion/versions/ccm.accordion-2.1.0.js", {
      "style": [ "ccm.load","https://ccmjs.github.io/work-and-study/business-english/be1/resources/accordion.css" ],
      "size": "md",
      "color": "info",
      "entries": [ "ccm.load", "https://ccmjs.github.io/work-and-study/business-english/be1/resources/accordion_data.js" ]
    } ],
    "css": [ "ccm.load", "https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css",
      { "context": "head", "url": "https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" },
      "https://use.fontawesome.com/releases/v5.6.3/css/all.css",
      { "context": "head", "url": "https://use.fontawesome.com/releases/v5.6.3/css/all.css" },
      "https://ccmjs.github.io/work-and-study/business-english/be1/resources/default.css"
    ],
    "menu": {
      "comp": [ "ccm.component", "https://ccmjs.github.io/akless-components/menu/versions/ccm.menu-2.4.4.js", {
        "css": [ "ccm.load", "https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css",
          "https://use.fontawesome.com/releases/v5.6.3/css/all.css",
          "https://ccmjs.github.io/work-and-study/business-english/be1/resources/menu.css" ]
      } ],
      "data": [ "ccm.store", "https://ccmjs.github.io/work-and-study/business-english/be1/resources/datasets.js" ]

    },
    "cloze": {
      "comp": [ "ccm.component", "https://ccmjs.github.io/akless-components/cloze/versions/ccm.cloze-6.0.0.js"],
      "ignore":{
        "key": [ "ccm.get", { "name": "ws_cloze", "url": "https://ccm2.inf.h-brs.de" } ],
        "data": {
          "store": [ "ccm.store", { "name": "be1_guest_results", "url": "https://ccm2.inf.h-brs.de" } ],
          "user": true
        },
        "onfinish": {
          "login": true,
          "store": {
            "settings": {
              "url": "https://ccm2.inf.h-brs.de",
              "name": "be1_guest_results"
            },
            "user": true
          },
          "alert": "Saved for your student analytics!",
          "restart": true
        },
        "user": [ "ccm.instance", "https://ccmjs.github.io/akless-components/user/versions/ccm.user-9.3.0.js", {
          "key": [ "ccm.get", "https://ccmjs.github.io/akless-components/user/resources/configs.js", "compact" ],
          "logged_in": true
        } ]
      }
    },
    "quiz": {
      "comp": [ "ccm.component", "https://ccmjs.github.io/akless-components/quiz/versions/ccm.quiz-4.0.0.js"],
      "ignore": {
        "key": [ "ccm.get", { "name": "ws_quiz", "url": "https://ccm2.inf.h-brs.de" } ],
        "data": {
          "store": [ "ccm.store", { "name": "be1_guest_results", "url": "https://ccm2.inf.h-brs.de" } ],
          "user": true
        },
        "onfinish": {
          "login": true,
          "store": {
            "settings": { "url": "https://ccm2.inf.h-brs.de", "name": "be1_guest_results" },
            "user": true
          },
          "alert": "Saved for your student analytics!",
          "restart": true
        },
        "user": [ "ccm.instance", "https://ccmjs.github.io/akless-components/user/versions/ccm.user-9.3.0.js", {
          "key": [ "ccm.get", "https://ccmjs.github.io/akless-components/user/resources/configs.js", "compact" ],
          "logged_in": true
        } ]
      }
    },
    "quick_decide": {
      "comp": [ "ccm.component", "https://ccmjs.github.io/akless-components/quick_decide/versions/ccm.quick_decide-2.0.2.js"],
      "ignore": {
        "key": [ "ccm.get", { "name": "ws_quick_decide", "url": "https://ccm2.inf.h-brs.de" } ],
        "data": {
          "store": [ "ccm.store", { "name": "be1_guest_results", "url": "https://ccm2.inf.h-brs.de" } ],
          "user": true
        },
        "onfinish": {
          "login": true,
          "store": {
            "settings": {
              "url": "https://ccm2.inf.h-brs.de",
              "name": "be1_guest_results"
            },
            "user": true
          },
          "alert": "Saved for your student analytics!",
          "restart": true
        },
        "user": [ "ccm.instance", "https://ccmjs.github.io/akless-components/user/versions/ccm.user-9.3.0.js", {
          "key": [ "ccm.get", "https://ccmjs.github.io/akless-components/user/resources/configs.js", "compact" ],
          "logged_in": true
        } ]
      }
    },
    "exercise": {
      "comp": [ "ccm.component", "https://ccmjs.github.io/tkless-components/exercise/versions/ccm.exercise-5.0.0.js"],
      "ignore": {
        "key": [ "ccm.get", { "name": "ws_exercise", "url": "https://ccm2.inf.h-brs.de" } ],
        "data": {
          "store": [ "ccm.store", { "name": "be1_guest_results", "url": "https://ccm2.inf.h-brs.de" } ],
          "user": true
        },
        "onfinish": {
          "login": true,
          "store": {
            "settings": {
              "url": "https://ccm2.inf.h-brs.de",
              "name": "be1_guest_results"
            },
            "user": true
          },
          "alert": "Saved for your student analytics!",
          "restart": true
        },
        "user": [ "ccm.instance", "https://ccmjs.github.io/akless-components/user/versions/ccm.user-9.3.0.js", {
          "key": [ "ccm.get", "https://ccmjs.github.io/akless-components/user/resources/configs.js", "compact" ],
          "logged_in": true
        } ]
      }
    },
    "user": [ "ccm.instance", "https://ccmjs.github.io/akless-components/user/versions/ccm.user-9.3.0.js", {
      "key": [ "ccm.get", "https://ccmjs.github.io/akless-components/user/resources/configs.js", "compact" ],
      "logged_in": true
    } ],
    "pdf_viewer": {
      "comp": [ "ccm.component", "https://ccmjs.github.io/tkless-components/pdf_viewer/versions/ccm.pdf_viewer-4.0.0.js" ],
      "ignore": [ "ccm.get", { "name": "ws_pdf_viewer", "url": "https://ccm2.inf.h-brs.de" }, "1536585034382X04756237908295757" ]
    },
    "chat": [ "ccm.component", "https://ccmjs.github.io/tkless-components/comment/versions/ccm.comment-5.0.0.js", {
      "submit_button_label": "SENT",
      "editable": true,
      "chat": true,
      "data": {
        "store": [ "ccm.store", { "name": "b1_guest_chat_result", "url": "https://ccm2.inf.h-brs.de" } ],
        "key": "be1_guest_chat"
      },
      "user": [ "ccm.instance", "https://ccmjs.github.io/akless-components/user/versions/ccm.user-9.3.0.js", {
        "key": [ "ccm.get", "https://ccmjs.github.io/akless-components/user/resources/configs.js", "compact" ],
        "hash": [ "ccm.load", { "url": "https://ccmjs.github.io/akless-components/modules/md5.mjs", "type": "module" } ],
        "logged_in": true
      } ],
    } ],
    "feedback": [ "ccm.component", "https://ccmjs.github.io/tkless-components/feedback/versions/ccm.feedback-4.0.0.js", {
      "from_above": 20,
      "css": [ "ccm.load", "https://ccmjs.github.io/tkless-components/feedback/resources/right.css" ],
      "data": { "store": [ "ccm.store", { "name": "be1_guest_feedbackk", "url": "https://ccm2.inf.h-brs.de" } ] }
    } ],
    "analytic": [ "ccm.component", "https://ccmjs.github.io/akless-components/result/versions/ccm.result-2.0.0.js", {
      "user": [ "ccm.instance", "https://ccmjs.github.io/akless-components/user/versions/ccm.user-9.3.0.js", {
        "key": [ "ccm.get", "https://ccmjs.github.io/akless-components/user/resources/configs.js", "compact" ],
        "logged_in": true
      } ],
      "store": [ "ccm.store", { "name": "be1_guest_results", "url": "https://ccm2.inf.h-brs.de" } ]
    } ],
    "star_rating": {
      "comp": [ "ccm.component", "https://ccmjs.github.io/tkless-components/star_rating/versions/ccm.star_rating-5.0.0.js" ],
      "ignore": {
        "show_results": true,
        "star_title": ["I do not Like It at All", "I do not Like It", "It Is OK", "I Like It", "Like It a Lot"],
        "data": {
          "store": [ "ccm.store", { "name": "be1_guest_star_rating_results", "url": "https://ccm2.inf.h-brs.de" } ]
        },
        "user": [ "ccm.instance", "https://ccmjs.github.io/akless-components/user/versions/ccm.user-9.3.0.js", {
          "key": [ "ccm.get", "https://ccmjs.github.io/akless-components/user/resources/configs.js", "compact" ],
          "logged_in": true
        } ]
      }
    },
    "content": {
      "comp": [ "ccm.component", "https://ccmjs.github.io/akless-components/content/versions/ccm.content-5.2.0.js", {
        "css": [ "ccm.load", "https://tkless.github.io/ccm-components/libs/bootstrap/css/bootstrap.css" ]
      } ],
      "ignore": [ "ccm.get", { "name": "ws_content", "url": "https://ccm2.inf.h-brs.de" }, "1536585034382X04756237908295757" ]
    },
    "mode": "guest"
  }
};