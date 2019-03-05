/**
 * @overview ccm component for business english app
 * @author Tea Kless <tea.kless@web.de> 2019
 * @copyright © 2019 work&study - All Rights reserved.
 */
( function () {

  const component = {

    name: 'be2',

    ccm: 'https://ccmjs.github.io/ccm/ccm.js',

    config: {
      "html": {
        "main": {
          "inner": [
            {
              "id": "header"
            },
            {
              "id": "article"
            },
            {
              "id": "feedback"
            },
            {
              "id": "footer"
            }
          ]
        },
        "content": {
          "inner": [
            {
              "id": "section"
            },
            {
              "id": "menu-list"
            }
          ]
        }
      },
      "css": [ "ccm.load", "https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css",
        { "context": "head", "url": "https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" },
        "https://use.fontawesome.com/releases/v5.6.3/css/all.css",
        { "context": "head", "url": "https://use.fontawesome.com/releases/v5.6.3/css/all.css" },
        "resources/default.css"
      ],
      "js": [ "ccm.load", [ "https://code.jquery.com/jquery-3.2.1.slim.min.js",
        "https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" ] ],
      "navigation": [ "ccm.load", { "url": "resources/navigation.html", "type": "data" } ],
      "menu": {
        "comp": [ "ccm.component", "https://ccmjs.github.io/akless-components/menu/versions/ccm.menu-2.4.4.js", {
          "css": [ "ccm.load", "resources/menu.css" ],
          "logger": [ "ccm.instance", "https://ccmjs.github.io/akless-components/log/versions/ccm.log-4.0.2.js", {
            "events": {
              "click": {
                "data": true,
                "user": true
              }
            },
            "onfinish": {
              "store": {
                "settings": { "store": "be2_ws1819_menu_log", "url": "https://ccm2.inf.h-brs.de" },
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
        "comp": [ "ccm.component", "https://ccmjs.github.io/akless-components/cloze/versions/ccm.cloze-5.0.3.js"],
        "ignore": {
          "key": [ "ccm.get", { "name": "w&s_cloze", "url": "https://ccm2.inf.h-brs.de" } ],
          "data": {
            "store": [ "ccm.store", { "name": "be2_SoSe19_cloze_results", "url": "https://ccm2.inf.h-brs.de" } ],
            "user": true
          },
          "onfinish": {
            "login": true,
            "store": {
              "settings": {
                "url": "https://ccm2.inf.h-brs.de",
                "name": "be2_SoSe19_cloze_results"
              },
              "user": true,
              "permissions": {
                "creator": "teacher",
                "realm": "guest",
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
          }
        },
      },
      "user": [ "ccm.instance", "https://ccmjs.github.io/akless-components/user/versions/ccm.user-9.0.0.js", {
        "realm": "guest",
        "title": "Please enter the username you're given in class.",
        "logged_in": false,
        "no_password": true,
        "lib": [ "ccm.load", "https://use.fontawesome.com/releases/v5.6.3/css/all.css" ],
        "logger": [ "ccm.instance", "https://ccmjs.github.io/akless-components/log/versions/ccm.log-3.1.0.js", {
          "events": {
            "ready": {
              "browser": true,
              "parent": true,
              "root": true,
              "user": true,
              "website": true
            },
            "login": {
              "user": true
            },
            "logout": {}
          },
          "onfinish": {
            "store": {
              "settings": { "store": "be2_SoSe19_user_log", "url": "https://ccm2.inf.h-brs.de" },
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
      "pdf_viewer": {
        "comp": [ "ccm.component", "https://ccmjs.github.io/tkless-components/pdf_viewer/versions/ccm.pdf_viewer-4.0.0.js", {
          "logger": [ "ccm.instance", "https://ccmjs.github.io/akless-components/log/versions/ccm.log-4.0.2.js", {
            "events": {
              "start": {
                "user": true
              },
              "prev": {
                "data": true,
                "user": true
              },
              "next": {
                "data": true,
                "user": true
              },
              "goto": {
                "data": true,
                "user": true
              }
            },
            "onfinish": {
              "store": {
                "settings": { "store": "be2_SoSe19_pdf_viewer_log", "url": "https://ccm2.inf.h-brs.de" },
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
        "ignore": [ "ccm.get", { "name": "w&s_pdf_viewer", url: "https://ccm2.inf.h-brs.de" }, "1536585034382X04756237908295757" ]
      },
      "accordion": [ "ccm.component", "https://ccmjs.github.io/tkless-components/accordion/versions/ccm.accordion-2.1.0.js", {
        "style": [ "ccm.load","resources/accordion.css" ],
        "size": "md",
        "color": "info",
        "entries": [ "ccm.load", "resources/accordion_data.js" ],
        "logger": [ "ccm.instance", "https://ccmjs.github.io/akless-components/log/versions/ccm.log-3.1.0.js", {
          "events": {
            "ready": {
              "user": true
            }
          },
          "onfinish": {
            "store": {
              "settings": { "store": "be2_ws1819_accordion_log", "url": "https://ccm2.inf.h-brs.de" },
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
      "feedback": [ "ccm.component", "https://ccmjs.github.io/tkless-components/feedback/versions/ccm.feedback-4.0.0.js", {
        "from_above": 20,
        "css": [ "ccm.load", "https://ccmjs.github.io/tkless-components/feedback/resources/right.css" ],
        "data": { "store": [ "ccm.store", { "name": "feedback", "url": "https://ccm2.inf.h-brs.de" } ], "key": "be2_SoSe19_feedback" }
      } ]
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

      this.ready = async () => {

        // set shortcut to help functions
        $ = self.ccm.helper;

        // privatize all possible instance members
        my = $.privatize( self );

        // logging of 'ready' event
        self.logger && self.logger.log( 'ready', $.clone( my ) );

      };

      this.start = async () => {

        // logging of 'start' event
        self.logger && self.logger.log( 'start', $.clone( my ) );

        let main = $.html( my.html.main );

        setUpNavigation();

        renderContent();

        renderFeedback();

        $.setContent( self.element, main );

        function setUpNavigation() {

          $.setContent( main.querySelector( "#header" ), my.navigation );
          main.querySelector( ".navbar-toggler" ).addEventListener( 'click', () => {
            main.querySelector( "nav button").toggleAttribute("aria-expanded");
            main.querySelector( ".navbar-toggler" ).classList.toggle( 'collapsed' );
            main.querySelector( ".navbar-collapse" ).classList.toggle( 'show' );
          } );

          main.querySelectorAll( '.navbar-nav  > .nav-item' ).forEach( li => {
            li.addEventListener( 'click', async () => {
              main.querySelectorAll( '.nav-item' ).forEach( li => {
                li.classList.remove( 'active' );
              } );

              switch (li.id) {
                case 'home':
                  await renderContent();
                  break;
                case 'script':
                  await renderScript();
                  break;
                case 'stat':
                  await renderAnalytics();
                  break;
                case 'info':
                  await renderInfo();
                  break;
              }


            } );
          } );

          main.querySelector( "#sign-on" ).addEventListener( 'click', async () => {
            if ( self.user ) {
              await self.user.login();
              main.querySelector( '#username' ).innerHTML = "<span class='fas fa-user pr-1'></span>"+ self.user.data().user;
              main.querySelector( '#sign-on' ).style.display = "none";
              const sign_out = main.querySelector( '#sign-out' );
              sign_out.style.display = "block";

              sign_out.addEventListener( 'click', async () => {
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

          const result = await my.menu.data.get();
          result.forEach(  async entry => {

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
                    const config = $.clone( my.cloze.ignore );
                    config.root = div;
                    config.key[2] = event.data.id;
                    config.data.key = event.data.key;
                    config.onfinish.store.key = event.data.key;

                    await my.cloze.comp.start( config );
                    break;
                }

                $.setContent( main.querySelector( "#article" ), div );
              }
            } );
          } );
        }

        async function renderFeedback() {
          await my.feedback.start({ root: main.querySelector( '#feedback' ) });
        }

        async function renderScript() {
          const div = getDiv();
          div.innerHTML = "This menu item is not available.";
          $.setContent( main.querySelector( "#article" ), div );

          //$.setContent( main.querySelector( "#article" ), $.loading( self ) );
          //const div = getDiv();
          //await my.pdf_viewer.comp.start( { root: div, pdf: my.pdf_viewer.ignore } );
          //$.setContent( main.querySelector( "#article" ), div );
        }

        async function renderAnalytics() {
          const div = getDiv();
          div.innerHTML = "This menu item is not available.";
          //await my.analytics.start( { root: div } );
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