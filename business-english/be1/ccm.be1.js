/**
 * @overview ccm component for business english app
 * @author Tea Kless <tea.kless@web.de> 2019
 * @copyright © 2019 work&study - All Rights reserved.
 */
( function () {

  const component = {

    name: 'be1',

    ccm: 'https://ccmjs.github.io/ccm/versions/ccm-22.6.1.js',

    config: {
      "html": [ "ccm.load", "resources/templates.html" ],
      "css": [ "ccm.load", "https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css",
        { "context": "head", "url": "https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" },
        "https://use.fontawesome.com/releases/v5.6.3/css/all.css",
        { "context": "head", "url": "https://use.fontawesome.com/releases/v5.6.3/css/all.css" },
        "resources/default.css"
      ],
      "js": [ "ccm.load", [ "https://code.jquery.com/jquery-3.2.1.slim.min.js",
        "https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" ] ],

      "menu": {
        "comp": [ "ccm.component", "https://ccmjs.github.io/akless-components/menu/versions/ccm.menu-2.4.4.js", {
          "css": [ "ccm.load", "https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css",
            "https://use.fontawesome.com/releases/v5.6.3/css/all.css",
            "resources/menu.css" ],
          "logger": [ "ccm.instance", "https://ccmjs.github.io/akless-components/log/versions/ccm.log-4.0.2.js", {
            "events": {
              "click": {
                "data": true,
                "user": true
              }
            },
            "onfinish": {
              "store": {
                "settings": { "name": "be1_WiSe19_menu_log", "url": "https://ccm2.inf.h-brs.de" },
                "permissions": {
                  "creator": "akless2m",
                  "realm": "hbrsinfkaul",
                  "access": {
                    "get": "all",
                    "set": "creator",
                    "del": "creator"
                  }
                }
              }
            }
          } ]
        } ],
        "data": [ "ccm.store", "resources/datasets.js" ]

      },
      "cloze": {
        "comp": [ "ccm.component", "https://ccmjs.github.io/akless-components/cloze/versions/ccm.cloze-6.0.0.js"],
        "ignore":{
          "key": [ "ccm.get", { "name": "ws_cloze", "url": "https://ccm2.inf.h-brs.de" } ],
          "data": {
            "store": [ "ccm.store", { "name": "be1_WiSe19_results", "url": "https://ccm2.inf.h-brs.de" } ],
            "user": true
          },
          "onfinish": {
            "login": true,
            "store": {
              "settings": {
                "url": "https://ccm2.inf.h-brs.de",
                "name": "be1_WiSe19_results"
              },
              "user": true,
              "permissions": {
                "creator": "be_team",
                "realm": "cloud",
                "group": [ "%user%" ],
                "access": {
                  "get": "group",
                  "set": "group",
                  "del": "creator"
                }
              }
            },
            "alert": "Saved for your student analytics!",
            "restart": true
          },
          "user": [ "ccm.instance", "https://ccmjs.github.io/akless-components/user/versions/ccm.user-9.2.0.js", {
            "key": [ "ccm.get", "https://ccmjs.github.io/akless-components/user/resources/configs.js", "compact" ],
            "logged_in": true,
            "realm": "cloud",
            "store": "be1_WiSe19_user",
            "url": "https://ccm2.inf.h-brs.de",
            "title": "Please enter your Username and Password"
          } ],
          "logger": [ "ccm.instance", "https://ccmjs.github.io/akless-components/log/versions/ccm.log-4.0.2.js", {
            "events": {
              "start": {
                "data": true,
                "user": true
              },
              "retry": {
                "user": true
              },
              "finish": {
                "user": true
              }
            },
            "only": {
              "data": [ "key" ]
            },
            "onfinish": {
              "store": {
                "settings": { "name": "be1_WiSe19_cloze_log", "url": "https://ccm2.inf.h-brs.de" },
                "permissions": {
                  "creator": "akless2m",
                  "realm": "hbrsinfkaul",
                  "access": {
                    "get": "all",
                    "set": "creator",
                    "del": "creator"
                  }
                }
              }
            }
          } ]
        }
      },
      "quiz": {
        "comp": [ "ccm.component", "https://ccmjs.github.io/akless-components/quiz/versions/ccm.quiz-4.0.0.js"],
        "ignore": {
          "key": [ "ccm.get", { "name": "ws_quiz", "url": "https://ccm2.inf.h-brs.de" } ],
          "data": {
            "store": [ "ccm.store", { "name": "be1_WiSe19_results", "url": "https://ccm2.inf.h-brs.de" } ],
            "user": true
          },
          "onfinish": {
            "login": true,
            "store": {
              "settings": {
                "url": "https://ccm2.inf.h-brs.de",
                "name": "be1_WiSe19_results"
              },
              "user": true,
              "permissions": {
                "creator": "be_team",
                "realm": "cloud",
                "group": [ "%user%" ],
                "access": {
                  "get": "group",
                  "set": "group",
                  "del": "creator"
                }
              }
            },
            "alert": "Saved for your student analytics!",
            "restart": true
          },
          "user": [ "ccm.instance", "https://ccmjs.github.io/akless-components/user/versions/ccm.user-9.2.0.js", {
            "key": [ "ccm.get", "https://ccmjs.github.io/akless-components/user/resources/configs.js", "compact" ],
            "logged_in": true,
            "realm": "cloud",
            "store": "be1_WiSe19_user",
            "url": "https://ccm2.inf.h-brs.de",
            "title": "Please enter your Username and Password"
          } ],
          "logger": [ "ccm.instance", "https://ccmjs.github.io/akless-components/log/versions/ccm.log-4.0.2.js", {
            "events": {
              "start": {
                "data": true,
                "user": true
              },
              "finish": {
                "user": true
              }
            },
            "only": {
              "data": [ "key" ]
            },
            "onfinish": {
              "store": {
                "settings": { "name": "be1_WiSe19_quiz_log", "url": "https://ccm2.inf.h-brs.de" },
                "permissions": {
                  "creator": "akless2m",
                  "realm": "hbrsinfkaul",
                  "access": {
                    "get": "all",
                    "set": "creator",
                    "del": "creator"
                  }
                }
              }
            }
          } ]
        }
      },
      "quick_decide": {
        "comp": [ "ccm.component", "https://ccmjs.github.io/akless-components/quick_decide/versions/ccm.quick_decide-2.0.2.js"],
        "ignore": {
          "key": [ "ccm.get", { "name": "ws_quick_decide", "url": "https://ccm2.inf.h-brs.de" } ],
          "data": {
            "store": [ "ccm.store", { "name": "be1_WiSe19_results", "url": "https://ccm2.inf.h-brs.de" } ],
            "user": true
          },
          "onfinish": {
            "login": true,
            "store": {
              "settings": {
                "url": "https://ccm2.inf.h-brs.de",
                "name": "be1_WiSe19_results"
              },
              "user": true,
              "permissions": {
                "creator": "be_team",
                "realm": "cloud",
                "group": [ "%user%" ],
                "access": {
                  "get": "group",
                  "set": "group",
                  "del": "creator"
                }
              }
            },
            "alert": "Saved for your student analytics!",
            "restart": true
          },
          "user": [ "ccm.instance", "https://ccmjs.github.io/akless-components/user/versions/ccm.user-9.2.0.js", {
            "key": [ "ccm.get", "https://ccmjs.github.io/akless-components/user/resources/configs.js", "compact" ],
            "logged_in": true,
            "realm": "cloud",
            "store": "be1_WiSe19_user",
            "url": "https://ccm2.inf.h-brs.de",
            "title": "Please enter your Username and Password"
          } ],
          "logger": [ "ccm.instance", "https://ccmjs.github.io/akless-components/log/versions/ccm.log-4.0.2.js", {
            "events": {
              "start": {
                "user": true
              },
              "finish": {
                "user": true
              }
            },
            "onfinish": {
              "store": {
                "settings": { "name": "be1_WiSe19_quick_decide_log", "url": "https://ccm2.inf.h-brs.de" },
                "permissions": {
                  "creator": "akless2m",
                  "realm": "hbrsinfkaul",
                  "access": {
                    "get": "all",
                    "set": "creator",
                    "del": "creator"
                  }
                }
              }
            }
          } ]
        }
      },
      "exercise": {
        "comp": [ "ccm.component", "https://ccmjs.github.io/tkless-components/exercise/versions/ccm.exercise-5.0.0.js"],
        "ignore": {
          "key": [ "ccm.get", { "name": "ws_exercise", "url": "https://ccm2.inf.h-brs.de" } ],
          "data": {
            "store": [ "ccm.store", { "name": "be1_WiSe19_results", "url": "https://ccm2.inf.h-brs.de" } ],
            "user": true
          },
          "onfinish": {
            "login": true,
            "store": {
              "settings": {
                "url": "https://ccm2.inf.h-brs.de",
                "name": "be1_WiSe19_results"
              },
              "user": true,
              "permissions": {
                "creator": "be_team",
                "realm": "cloud",
                "group": [ "%user%" ],
                "access": {
                  "get": "group",
                  "set": "group",
                  "del": "creator"
                }
              }
            },
            "alert": "Saved for your student analytics!",
            "restart": true
          },
          "user": [ "ccm.instance", "https://ccmjs.github.io/akless-components/user/versions/ccm.user-9.2.0.js", {
            "key": [ "ccm.get", "https://ccmjs.github.io/akless-components/user/resources/configs.js", "compact" ],
            "logged_in": true,
            "realm": "cloud",
            "store": "be1_WiSe19_user",
            "url": "https://ccm2.inf.h-brs.de",
            "title": "Please enter your Username and Password"
          } ]
        }
      },
      "user": [ "ccm.instance", "https://ccmjs.github.io/akless-components/user/versions/ccm.user-9.2.0.js", {
        "key": [ "ccm.get", "https://ccmjs.github.io/akless-components/user/resources/configs.js", "compact" ],
        "logged_in": true,
        "realm": "cloud",
        "store": "be1_WiSe19_user",
        "url": "https://ccm2.inf.h-brs.de",
        "title": "Please enter your username and uassword <br> you're given in class."
      } ],
      "pdf_viewer": {
        "comp": [ "ccm.component", "https://ccmjs.github.io/tkless-components/pdf_viewer/versions/ccm.pdf_viewer-4.0.0.js" ],
        "ignore": [ "ccm.get", { "name": "ws_pdf_viewer", "url": "https://ccm2.inf.h-brs.de" }, "1536585034382X04756237908295757" ]
      },
      "accordion": [ "ccm.component", "https://ccmjs.github.io/tkless-components/accordion/versions/ccm.accordion-2.1.0.js", {
        "style": [ "ccm.load","resources/accordion.css" ],
        "size": "md",
        "color": "info",
        "entries": [ "ccm.load", "resources/accordion_data.js" ]
      } ],
      "chat": [ "ccm.component", "https://ccmjs.github.io/tkless-components/comment/versions/ccm.comment-5.0.0.js", {
        "submit_button_label": "SENT",
        "editable": true,
        "chat": true,
        "data": {
          "store": [ "ccm.store", { "name": "ws_chat_result", "url": "https://ccm2.inf.h-brs.de" } ],
          "key": "be1_WiSe19_chat"
        },
        "user": [ "ccm.instance", "https://ccmjs.github.io/akless-components/user/versions/ccm.user-9.2.0.js", {
          "key": [ "ccm.get", "https://ccmjs.github.io/akless-components/user/resources/configs.js", "compact" ],
          "hash": [ "ccm.load", { "url": "https://ccmjs.github.io/akless-components/modules/md5.mjs", "type": "module" } ],
          "logged_in": true,
          "realm": "cloud",
          "store": "be1_WiSe19_user",
          "url": "https://ccm2.inf.h-brs.de",
          "title": "Please enter your Username and Password"
        } ],
      } ],
      "feedback": [ "ccm.component", "https://ccmjs.github.io/tkless-components/feedback/versions/ccm.feedback-4.0.0.js", {
        "from_above": 20,
        "css": [ "ccm.load", "https://ccmjs.github.io/tkless-components/feedback/resources/right.css" ],
        "data": { "store": [ "ccm.store", { "name": "be1_WiSe19_feedback", "url": "https://ccm2.inf.h-brs.de" } ] }
      } ],
      "analytic": [ "ccm.component", "https://ccmjs.github.io/akless-components/result/versions/ccm.result-2.0.0.js", {
        "user": [ "ccm.instance", "https://ccmjs.github.io/akless-components/user/versions/ccm.user-9.2.0.js", {
          "key": [ "ccm.get", "https://ccmjs.github.io/akless-components/user/resources/configs.js", "compact" ],
          "hash": [ "ccm.load", { "url": "https://ccmjs.github.io/akless-components/modules/md5.mjs", "type": "module" } ],
          "logged_in": true,
          "realm": "cloud",
          "store": "be1_WiSe19_user",
          "url": "https://ccm2.inf.h-brs.de",
          "title": "Please enter your Username and Password"
        } ],
        "store": [ "ccm.store", { "name": "be1_WiSe19_results", "url": "wss://ccm2.inf.h-brs.de" } ]
      } ],
      "star_rating": {
        "comp": [ "ccm.component", "https://ccmjs.github.io/tkless-components/star_rating/versions/ccm.star_rating-5.0.0.js" ],
        "ignore": {
          "show_results": true,
          "star_title": ["I do not Like It at All", "I do not Like It", "It Is OK", "I Like It", "Like It a Lot"],
          "data": {
            "store": [ "ccm.store", { "name": "be1_WiSe19_star_rating_results", "url": "https://ccm2.inf.h-brs.de" } ]
          },
          "user": [ "ccm.instance", "https://ccmjs.github.io/akless-components/user/versions/ccm.user-9.2.0.js", {
            "key": [ "ccm.get", "https://ccmjs.github.io/akless-components/user/resources/configs.js", "compact" ],
            "logged_in": true,
            "realm": "cloud",
            "store": "be1_WiSe19_user",
            "url": "https://ccm2.inf.h-brs.de",
            "title": "Please enter your Username and Password"
          } ]
        }
      },
      "json_builder": [ "ccm.component", "https://ccmjs.github.io/akless-components/json_builder/versions/ccm.json_builder-1.3.0.js", {
        "html": {
          "tag": "form",
          "onsubmit": "%onclick%",
          "inner": [
            {
              "tag": "textarea",
              "id": "input",
              "class": "form-control",
              "oninput": "%oninput%",
              "onchange": "%onchange%"
            },
            {
              "tag": "input",
              "id": "button",
              "class": "btn btn-primary pull-right",
              "value": "Save",
              "type": "submit",
              "onclick": "%onclick%"
            }
          ]
        },
        "bootstrap": [ "ccm.load", "https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
        ],
        "data": {
          "store": [ "ccm.store", { "name": "be1_WiSe19_user", "url": "https://ccm2.inf.h-brs.de" } ],
          "key": {}
        },
        "directly": true,
        "onfinish": { log: true, alert: "Saved!", store: true }
      } ],
      "content": {
        "comp": [ "ccm.component", "https://ccmjs.github.io/akless-components/content/versions/ccm.content-5.2.0.js", {
          "css": [ "ccm.load", "https://tkless.github.io/ccm-components/libs/bootstrap/css/bootstrap.css" ]
        } ],
        "ignore": [ "ccm.get", { "name": "ws_content", "url": "https://ccm2.inf.h-brs.de" }, "1536585034382X04756237908295757" ]
      },
      "logger": [ "ccm.instance", "https://ccmjs.github.io/akless-components/log/versions/ccm.log-4.0.2.js", {
        "events": {
          "ready": {
            "browser": true,
            "user": true,
            "website": true
          },
          "toggle": {
            "data": true,
            "user": true
          },
          "nav": {
            "data": true,
            "user": true
          },
          "login": {
            "user": true
          },
          "logout": {
            "user": true
          }
        },
        "onfinish": {
          "store": {
            "settings": { "name": "be1_WiSe19_app_log", "url": "https://ccm2.inf.h-brs.de" },
            "permissions": {
              "creator": "akless2m",
              "realm": "hbrsinfkaul",
              "access": {
                "get": "all",
                "set": "creator",
                "del": "creator"
              }
            }
          }
        }
      } ],
      "user_feedback": [ "ccm.store", { "name": "be1_WiSe19_feedback", "url": "https://ccm2.inf.h-brs.de" } ],
      "admin": "be_team"
    },

    Instance: function () {

      /**
       * own reference for inner functions
       * @type {Instance}
       */
      const self = this;

      /**
       * privatized instance members
       * @type {object}
       */
      let my;

      /**
       * shortcut to help functions
       * @type {Object.<string,function>}
       */
      let $;

      this.init = async () => {

        if ( self.user ) self.user.onchange = login => {
          if ( login ) return;

          // clear content
          $.setContent( self.element, '' );

          // restart app
          self.start();
        }
      };

      this.ready = async () => {

        // set shortcut to help functions
        $ = self.ccm.helper;

        // privatize all possible instance members
        my = $.privatize( self );

        // logging of 'ready' event
        self.logger && self.logger.log( 'ready', $.clone( my ) );

      };

      this.start = async () => {

        // login user, if not logged in
        this.user && await this.user.login();

        // logging of 'start' event
        self.logger && self.logger.log( 'start' );

        let main = $.html( my.html.main );

        const feedbacks = await my.user_feedback.get( {} );

        setUpNavigation();

        renderContent();

        renderFeedback();

        $.setContent( self.element, main );

        function setUpNavigation() {
          const nav = $.html( my.html.navigation,  {
            show_hide_nav: () => {
              main.querySelector( "nav button").toggleAttribute("aria-expanded");
              main.querySelector( ".navbar-toggler" ).classList.toggle( 'collapsed' );
              main.querySelector( ".navbar-collapse" ).classList.toggle( 'show' );

              // logging of 'toggle' event
              self.logger && self.logger.log( 'toggle', main.querySelector( ".navbar-toggler" ).classList.contains( 'collapsed' ) );

            },
            nav_item_click: async function () {
              const elem = this;
              main.querySelectorAll( '.nav-item' ).forEach( li => {
                li.classList.remove( 'active' );
              } );
              switch ( elem.id ) {
                case 'home':
                  await renderContent();
                  break;
                case 'chat':
                  await renderChat();
                  break;
                case 'stat':
                  await renderAnalytics();
                  break;
                case 'info':
                  await renderInfo();
                  break;
                case 'users':
                  await renderMembership();
                  break;
                case 'user-feedback':
                  if ( feedbacks.length !== 0 ) {
                    await renderUserFeedback();
                  }
                  break;
              }

              // logging of 'nav' event
              self.logger && self.logger.log( 'nav', elem.id );

            }
          }  );

          $.setContent( main.querySelector( "#header" ), nav );

          ( feedbacks.length !== 0 ) && main.querySelector( '[title=feedback]' ).classList.remove( 'disabled' );

          if (( my.admin && ( self.user.data().user !== my.admin ) ) || my.mode === 'guest' ) {
            main.querySelector('#users').remove();
            main.querySelector('#user-feedback').remove();
          }

          main.querySelector( "#sign-on" ).addEventListener( 'click', async () => {
            if ( self.user ) {

              await self.user.login();
              main.querySelector( '#username' ).innerHTML = "<span class='fas fa-user pr-1'></span>"+ self.user.data().user;
              main.querySelector( '#sign-on' ).style.display = "none";
              const sign_out = main.querySelector( '#sign-out' );
              sign_out.style.display = "block";

              // logging of 'login' event
              self.logger && self.logger.log( 'login' );

              sign_out.addEventListener( 'click', async () => {

                // logging of 'logout' event
                self.logger && self.logger.log( 'logout' );

                await self.user.logout();
                main.querySelector( '#username' ).innerHTML = "";
                main.querySelector( '#sign-on' ).style.display = "block";
                main.querySelector( '#sign-out' ).style.display = "none";
              } );
            }
          } );
          main.querySelector( "#sign-on" ).click();
        }

        async function renderContent() {
          const article = main.querySelector( '#article' );
          $.setContent( article, '' );
          let star_rating_key;

          const result = await my.menu.data.get();
          for ( const entry of result ) {

            let content = $.html( my.html.content );
            $.append( article, content );

            $.setContent( content.querySelector( "#section" ), entry.section );

            await my.menu.comp.start( {
              root: content.querySelector( "#menu-list" ),
              data: entry,
              onclick:  async event => {
                const div = getDiv();

                switch ( event.data.component ) {
                  case 'cloze':
                    const config_cloze = $.clone( my.cloze.ignore );
                    config_cloze.root = div;
                    config_cloze.key[2] = event.data.id;
                    config_cloze.data.key = event.data.key;
                    star_rating_key = event.data.key;
                    config_cloze.onfinish.store.key = event.data.key;

                    await my.cloze.comp.start( config_cloze );
                    break;
                  case 'quiz':
                    const config_quiz = $.clone( my.quiz.ignore );
                    config_quiz.root = div;
                    config_quiz.key[2] = event.data.id;
                    config_quiz.data.key = event.data.key;
                    star_rating_key = event.data.key;
                    config_quiz.onfinish.store.key = event.data.key;

                    await my.quiz.comp.start( config_quiz );
                    break;
                  case 'quick_decide':
                    const quick_decide = $.clone( my.quick_decide.ignore );
                    quick_decide.root = div;
                    quick_decide.key[2] = event.data.id;
                    star_rating_key = event.data.key;
                    quick_decide.onfinish.store.key = event.data.key;

                    await my.quick_decide.comp.start( quick_decide );
                    break;
                  case 'pdf':
                    const pdf = $.clone( my.pdf_viewer.ignore );
                    pdf[2] = event.data.id;
                    const config = {
                      key: pdf,
                      root: div
                    };
                    star_rating_key = event.data.key;
                    await my.pdf_viewer.comp.start( config );
                    break;
                  case 'exercise':
                    const exercise = $.clone( my.exercise.ignore );
                    exercise.root = div;
                    exercise.key[2] = event.data.id;
                    star_rating_key = event.data.key;
                    exercise.onfinish.store.key = event.data.key;

                    await my.exercise.comp.start( exercise );
                    break;

                 case 'content':
                    const content = $.clone( my.content.ignore );
                    content[2] = event.data.id;
                    star_rating_key = event.data.key;
                    const content_config = {
                      key: content,
                      root: div
                    };
                    star_rating_key = event.data.key;
                    content.root = div;
                    await my.content.comp.start( content_config );
                    break;
                }

                let heading = getDiv();
                heading.classList.add( 'heading' );
                heading.innerHTML = '<div class="mb-2 border-bottom"><h4>Do you like it? <span class="badge badge-info"> Please let us know.</span></h4></div>';

                const rating_div = document.createElement( 'div' );
                $.setContent( main.querySelector( "#article" ), div );
                main.querySelector( "#padding" ).appendChild( heading );
                main.querySelector( "#padding" ).appendChild( rating_div );

                const star_rating = $.clone( my.star_rating.ignore );
                star_rating.data.key = event.data.key;
                star_rating.root = rating_div;
                await my.star_rating.comp.start( star_rating );

              }
            } );
          }
        }

        async function renderFeedback() {
          await my.feedback.start({ root: main.querySelector( '#feedback' ) });
        }

        async function renderScript() {
          //const div = getDiv();
          //div.innerHTML = "This menu item is not available.";
          //$.setContent( main.querySelector( "#article" ), div );

          //$.setContent( main.querySelector( "#article" ), $.loading( self ) );
          //const div = getDiv();
          //await my.pdf_viewer.comp.start( { root: div, pdf: my.pdf_viewer.ignore } );
          //$.setContent( main.querySelector( "#article" ), div );
        }

        async function renderAnalytics() {
          const div = getDiv();
          await my.analytic.start( { root: div } );
          $.setContent( main.querySelector( "#article" ), div );
        }

        async function renderInfo() {
          const div = getDiv();
          $.setContent( div,  $.html(
            '<div class="container">' +
            ' <div class="mb-2 border-bottom">' +
            '    <h3 class="text-muted">About this app <small>Infos and how to</small></h3>' +
            '  </div><br>'+
            ' <div id="accordion"></div>'+
            '</div>'
          ) );
          $.setContent( main.querySelector( "#article" ), div );

          await my.accordion.start( { root: main.querySelector( "#accordion" ) } );
        }
        
        async function renderChat() {
          const div = getDiv();
          div.innerHTML = "This menu item is not available.";
          await my.chat.start( { root: div } );
          $.setContent( main.querySelector( "#article" ), div );
        }
        
        async function renderMembership() {
          const div = getDiv();
          await my.json_builder.start( {
            root: div,
            onfinish: async function (instance, results) {
              const users = await instance.data.store.get( {} );
              await $.asyncForEach( users.filter( user => user.user !== 'be_team' ), async user => await instance.data.store.del( user.key ) );
              for( const user in results ){
                await instance.data.store.set( { key: user, token: results[ user ], user: user, realm: 'cloud' } );
              }
              alert('Saved');
            },
            'data.convert': dataset => {
              const users = {} ;
              dataset.forEach( user => {
                if ( user.key !== 'be_team' )
                  users[ user.key ] = user.token;
              } );
              return users;
            }
          } );
          $.setContent( main.querySelector( "#article" ), div );
        }

        async function renderUserFeedback() {
          const div = getDiv();

          for( const fdbk of feedbacks ) {
            const feedback_elem = $.html( my.html.feedback_view, {
              feedback_title: fdbk.title,
              feedback_content: fdbk.content
            } );

            div.appendChild( feedback_elem );
          }
          $.setContent( main.querySelector( "#article" ), div );

        }

        function getDiv() {
          const div = document.createElement( 'div' );
          div.setAttribute( 'id', "padding" );

          return div;
        }

      };
    }
  };

  let b="ccm."+component.name+(component.version?"-"+component.version.join("."):"")+".js";if(window.ccm&&null===window.ccm.files[b])return window.ccm.files[b]=component;(b=window.ccm&&window.ccm.components[component.name])&&b.ccm&&(component.ccm=b.ccm);"string"===typeof component.ccm&&(component.ccm={url:component.ccm});let c=(component.ccm.url.match(/(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)/)||["latest"])[0];if(window.ccm&&window.ccm[c])window.ccm[c].component(component);else{var a=document.createElement("script");document.head.appendChild(a);component.ccm.integrity&&a.setAttribute("integrity",component.ccm.integrity);component.ccm.crossorigin&&a.setAttribute("crossorigin",component.ccm.crossorigin);a.onload=function(){window.ccm[c].component(component);document.head.removeChild(a)};a.src=component.ccm.url}
} )();
