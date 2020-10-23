/**
 * @overview ccm component for business english app
 * @author Tea Kless <tea.kless@web.de> 2018
 * @author André Kless <andre.kless@web.de> 2018
 * @copyright © 2020 work&study - All Rights reserved.
 */

{

  var component = {

    name: 'be2',

    ccm: 'https://ccmjs.github.io/ccm/versions/ccm-16.7.0.js',

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
      "css": [ "ccm.load", "https://ccmjs.github.io/tkless-components/libs/bootstrap/css/bootstrap.css",
        { "context": "head", "url": "https://ccmjs.github.io/tkless-components/libs/bootstrap/css/font-face.css" },
        "resources/default.css"
      ],
      "js": [ "ccm.load", [ "https://ccmjs.github.io/tkless-components/libs/jquery/jquery.min.js",
        "https://ccmjs.github.io/tkless-components/libs/bootstrap/js/bootstrap.min.js" ] ],
      "navigation": [ "ccm.load", "resources/navigation.html"],
      "menu": {
        "comp": [ "ccm.component", "https://ccmjs.github.io/akless-components/menu/versions/ccm.menu-1.2.1.js", {
          "css": [ "ccm.load",
            { "context": "head", "url": "https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" },
            "https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css",
            "resources/menu.css"
          ],
          "logger": [ "ccm.instance", "https://ccmjs.github.io/akless-components/log/versions/ccm.log-3.1.0.js", {
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
      "user": [ "ccm.instance", "https://ccmjs.github.io/akless-components/user/versions/ccm.user-7.1.0.js", {
        "realm": "guest",
        "title": "Please enter the username you're given in class.",
        "logged_in": false,
        "no_password": true,
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
              "settings": { "store": "be2_ws1819_user_log", "url": "https://ccm2.inf.h-brs.de" },
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
      "analytics": [ "ccm.component", "https://ccmjs.github.io/akless-components/cloze_analytics/versions/ccm.cloze_analytics-1.3.0.js", {
        "sections": {
          "results": "Show Results",
          "gaps": "Gap Analysis"
        },
        "user": [ "ccm.instance", "https://ccmjs.github.io/akless-components/user/versions/ccm.user-7.1.0.js", [ "ccm.get", "https://ccmjs.github.io/akless-components/user/resources/configs.js", "guest" ] ],
        "menu": [ "ccm.instance", "https://ccmjs.github.io/akless-components/menu/versions/ccm.menu-1.2.1.js", [ "ccm.get", "https://ccmjs.github.io/akless-components/menu/resources/configs.js", "bootstrap" ] ],
        "cloze": {
          "comp": [ "ccm.component", "https://ccmjs.github.io/akless-components/cloze/versions/ccm.cloze-4.1.0.js" ],
//        "configs": [ "ccm.store", { "url": "https://ccm2.inf.h-brs.de", "store": "w2c_cloze" } ],
          "results": [ "ccm.store", { "url": "https://ccm2.inf.h-brs.de", "store": "be2_ws18_cloze_results" } ]
        },
        "table": [ "ccm.component", "https://ccmjs.github.io/tkless-components/table/versions/ccm.table-1.0.0.js" ],
        "chart": [ "ccm.component", "https://ccmjs.github.io/akless-components/highchart/versions/ccm.highchart-1.0.0.js" ],
        "logger": [ "ccm.instance", "https://ccmjs.github.io/akless-components/log/versions/ccm.log-3.1.0.js", {
          "events": {
            "start": {
              "user": true
            }
          },
          "onfinish": {
            "store": {
              "settings": { "store": "be2_ws1819_analytics_log", "url": "https://ccm2.inf.h-brs.de" },
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
        "comp": [ "ccm.component", "https://ccmjs.github.io/tkless-components/pdf_viewer/versions/ccm.pdf_viewer-3.0.0.js", {
          "logger": [ "ccm.instance", "https://ccmjs.github.io/akless-components/log/versions/ccm.log-3.1.0.js", {
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
                "settings": { "store": "be2_ws1819_pdf_viewer_log", "url": "https://ccm2.inf.h-brs.de" },
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
        "config": {
          "store": { "store": "w2c_pdf_viewer", "url": "https://ccm2.inf.h-brs.de" },
          "key": "1536585034382X04756237908295757"
        }
      },
      "accordion": [ "ccm.component", "https://ccmjs.github.io/tkless-components/accordion/versions/ccm.accordion-1.0.0.js", {
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

      this.ready = callback => {

        // set shortcut to help functions
        $ = self.ccm.helper;

        // privatize all possible instance members
        my = $.privatize( self );

        // logging of 'ready' event
        self.logger && self.logger.log( 'ready', $.clone( my ) );

        callback();
      };

      this.start = callback => {

        // logging of 'start' event
        self.logger && self.logger.log( 'start', $.clone( my ) );

        let main = $.html( my.html.main );

        setUpNavigation();

        renderContent();

        renderFeedback();

        main.querySelector( '#footer' ).appendChild( $.html(
          "<div>\n" +
          "    <br>\n" +
          "    <hr>\n" +
          "    <div class=\"row\">\n" +
          "      <div id=\"logo\">\n" +
          "        <div style=\"display: flex;justify-content: space-around;align-items: center;\">\n" +
          "          <img src=\"https://ccmjs.github.io/work-and-study/business-english/be1/img/w&amp;s.svg\" alt=\"Logo work&amp;study\" width=\"7%\">\n" +
          "          <div style=\"width: 20%\">\n" +
          "            <img src=\"https://ccmjs.github.io/work-and-study/resources/hbrs_logo.png\" alt=\"Logo HBRS\" width=\"100%\">\n" +
          "          </div>\n" +
          "          <img src=\"https://ccmjs.github.io/work-and-study/resources/bmbf_logo.jpeg\" width=\"20%\" alt=\"Logo BMBF\" class=\"img-fluid\">\n" +
          "          <img src=\"https://ccmjs.github.io/work-and-study/resources/offene_hochschulen.svg\" width=\"12%\" alt=\"Logo offene Hochschulen\" class=\"img-fluid\">\n" +
          "        </div>\n" +
          "      </div>\n" +
          "      <div id=\"footer\" class=\"container\" style=\"margin-top: 2%; display: flex;\">\n" +
          "        <small class=\"text-center\">\n" +
          "          The project \"Work &amp; Study - Open Universities Rhine-Saar\" was funded by the Federal Ministry of Education and Research\n" +
          "          under the grant number 16OH22056 as part of the \"Ascent through Education\" program. The responsibility for the content of this\n" +
          "          publication lies with the authors.\"\n" +
          "        </small>\n" +
          "      </div>\n" +
          "    </div>\n" +
          "  </div>"
         ) );

        $.setContent( self.element, main );

        callback && callback();

        function setUpNavigation() {

          main.querySelector( "#header" ).innerHTML = my.navigation;

          [ ...main.querySelectorAll( '.navbar-nav  > li' ) ].map( li => {
            li.addEventListener( 'click', () => {
              [ ...main.querySelectorAll( '.navbar-nav  > li' ) ].map( li => {
                li.classList.remove( 'active' );
              } );
              li.classList.add( 'active' );
            } );
          } );

          main.querySelector( ".navbar-toggle" ).addEventListener( 'click', () => {
            main.querySelector( ".navbar-toggle" ).classList.toggle( 'collapsed' );
            main.querySelector( ".navbar-collapse" ).classList.toggle( 'in' );
          } );

          main.querySelector( "#home" ).addEventListener( 'click', ()  => {
            main.querySelector( ".navbar-toggle").click();
            renderContent();
          } );

          main.querySelector( "#script" ).addEventListener( 'click', () => {
            main.querySelector( ".navbar-toggle" ).click();
            $.setContent( main.querySelector( "#article" ), $.loading( self ) );
            const div = getDiv();
            self.ccm.get( my.pdf_viewer.config.store, my.pdf_viewer.config.key, pdf_viewer_config => {
              my.pdf_viewer.comp.start( pdf_viewer_config, pdf_viewer_instance => {
                $.setContent( div, pdf_viewer_instance.root );
                $.setContent( main.querySelector( "#article" ), div );
              } );
            } );
          } );

          main.querySelector( "#stat" ).addEventListener( 'click', () => {
            main.querySelector( ".navbar-toggle").click();
            if ( self.user ) {
              self.user.login( proceed );
            }
            else proceed();

            function proceed() {
              const div = getDiv();
              my.analytics.start( { root: div }, () => {
                $.setContent( main.querySelector( "#article" ), div );
              } );
            }
          } );

          main.querySelector( "#help" ).addEventListener( 'click', () => {
            main.querySelector( ".navbar-toggle").click();

            $.setContent( main.querySelector( "#article" ), $.html(
              '<div class="container">' +
              '  <div class="page-header">' +
              '    <h3>About this app <small>Infos and how to</small></h3>' +
              '  </div><br>'+
              '<div id="accordion"></div>'+
              '</div>'
            ) );

            my.accordion.start( { root: main.querySelector( "#accordion" ) } );
          } );

          main.querySelector( "#sign-on" ).addEventListener( 'click', () => {
            if ( self.user ) { self.user.login( () => {
              main.querySelector( '#username' ).innerHTML = "<span class='glyphicon glyphicon-user'></span> "+ self.user.data().user;
              main.querySelector( '#sign-on' ).style.display = "none";
              const sign_out = main.querySelector( '#sign-out' );
              sign_out.style.display = "block";

              sign_out.addEventListener( 'click', () => {
                self.user.logout( () => {
                  main.querySelector( '#username' ).innerHTML = "";
                  main.querySelector( '#sign-on' ).style.display = "block";
                  main.querySelector( '#sign-out' ).style.display = "none";
                });
              } );
            } ); }
          } );
          main.querySelector( "#sign-on" ).click();
        }

        function renderContent() {
          const article = main.querySelector( '#article' );
          $.setContent( article, '' );

          my.menu.data.get( result => {

            result.forEach( entry => {
              let content = $.html( my.html.content );
              $.append( article, content );

              $.setContent( content.querySelector( "#section" ), entry.section );

              my.menu.comp.start( {
                root: content.querySelector( "#menu-list" ),
                data: entry,
                onclick: ( event ) => {
                  const div = getDiv();
                  div.appendChild( event.content );
                  $.setContent( main.querySelector( "#article" ), div );
                }
              } );
            } );
          });
        }

        function renderFeedback() {
          self.ccm.load( "https://ccmjs.github.io/ccm/versions/ccm-18.0.0.js", () => {
            window.ccm[ '18.0.0' ].start( "https://ccmjs.github.io/tkless-components/feedback/versions/ccm.feedback-4.0.0.js", {
              "root": main.querySelector( '#feedback' ),
              "from_above": "20%",
              "css": [ "ccm.load", "https://ccmjs.github.io/tkless-components/feedback/resources/right.css" ],
              "data": { "store": [ "ccm.store", { "name": "feedback", "url": "https://ccm2.inf.h-brs.de" } ], "key": "be2_ws1819_feedback" }
            } );
          } );
        }

        function getDiv() {
          const div = document.createElement( 'div' );
          div.setAttribute( 'id', "padding" );

          return div;
        }

      };
    }
  };

  function p(){window.ccm[v].component(component)}const f="ccm."+component.name+(component.version?"-"+component.version.join("."):"")+".js";if(window.ccm&&null===window.ccm.files[f])window.ccm.files[f]=component;else{const n=window.ccm&&window.ccm.components[component.name];n&&n.ccm&&(component.ccm=n.ccm),"string"==typeof component.ccm&&(component.ccm={url:component.ccm});var v=component.ccm.url.split("/").pop().split("-");if(v.length>1?(v=v[1].split("."),v.pop(),"min"===v[v.length-1]&&v.pop(),v=v.join(".")):v="latest",window.ccm&&window.ccm[v])p();else{const e=document.createElement("script");document.head.appendChild(e),component.ccm.integrity&&e.setAttribute("integrity",component.ccm.integrity),component.ccm.crossorigin&&e.setAttribute("crossorigin",component.ccm.crossorigin),e.onload=function(){p(),document.head.removeChild(e)},e.src=component.ccm.url}}
}
