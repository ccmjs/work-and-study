/**
 * @overview ccm component for commenting
 * @author Tea Kless <tea.kless@web.de>, 2017
 * @license The MIT License (MIT)
 */

{

  var component = {

    name: 'be_2',

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
      "help": [ "ccm.load", "resources/help.html"],
      "menu": {
        "comp": [ "ccm.component", "https://ccmjs.github.io/akless-components/menu/versions/ccm.menu-1.2.1.js",
          {
            "css": [ "ccm.load",
              { "context": "head", "url": "https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" },
              "https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css",
              "resources/menu.css" ],
          }
        ],
        "data": [ "ccm.store", "resources/datasets.js" ]
      },
      "user": [ "ccm.instance", "https://ccmjs.github.io/akless-components/user/versions/ccm.user-7.0.0.js",
        [ "ccm.get", "https://ccmjs.github.io/akless-components/user/resources/configs.js", "guest" ]
      ],
      "feedback": [ "ccm.component", "https://ccmjs.github.io/tkless-components/feedback/versions/ccm.feedback-2.0.0.js", {
        "from_above": "20%",
        "position": "right",
        "data": { "store": [ "ccm.store", { "store": "feedback", "url": "https://ccm2.inf.h-brs.de" } ], "key": "be2_ws18_feedback" },
        }
      ],
      "analytics": [ "ccm.component", "https://ccmjs.github.io/akless-components/cloze_analytics/versions/ccm.cloze_analytics-1.3.0.js",
        {
        "sections": {
          "results": "Show Results",
          "gaps": "Gap Analysis"
        },
        "user": [ "ccm.instance", "https://ccmjs.github.io/akless-components/user/versions/ccm.user-7.0.0.js", [ "ccm.get", "https://ccmjs.github.io/akless-components/user/resources/configs.js", "guest" ] ],
        "menu": [ "ccm.instance", "https://ccmjs.github.io/akless-components/menu/versions/ccm.menu-1.1.0.js", [ "ccm.get", "https://ccmjs.github.io/akless-components/menu/resources/configs.js", "bootstrap" ] ],
        "cloze": {
          "comp": [ "ccm.component", "https://ccmjs.github.io/akless-components/cloze/versions/ccm.cloze-4.1.0.js" ],
          "configs": [ "ccm.store", "https://ccmjs.github.io/akless-components/cloze/resources/configs.js" ],
          "results": [ "ccm.store", { "url": "https://ccm2.inf.h-brs.de", "store": "cloze_results" } ]
        },
        "table": [ "ccm.component", "https://ccmjs.github.io/tkless-components/table/ccm.table.js" ],
        "chart": [ "ccm.component", "https://ccmjs.github.io/akless-components/highchart/versions/ccm.highchart-1.0.0.js" ]
        }
      ],
      "pdf_viewer": [ "ccm.component", "https://ccmjs.github.io/tkless-components/pdf_viewer/versions/ccm.pdf_viewer-2.1.0.js",
        [ "ccm.get", { "store": "w2c_pdf_viewer", "url": "https://ccm.inf.h-brs.de" }, "1523213610248X5207819848055685" ]
      ]
      // "voting": [ "ccm.component", "https://ccmjs.github.io/tkless-components/thumb_rating/versions/ccm.thumb_rating-2.0.0.js", {
      //   "buttons": true,
      //   "data": { "store": [ "ccm.store", "https://ccmjs.github.io/tkless-components/voting/resources/datastore.js" ] },
      //   "user": [ "ccm.instance", "https://ccmjs.github.io/akless-components/user/versions/ccm.user-7.0.1.js",
      //     [ "ccm.get", "https://ccmjs.github.io/akless-components/user/resources/configs.js", "guest" ]
      //   ]
      // } ]
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

        if ( self.logger ) self.logger.log( 'ready', my );

        callback();
      };

      this.start = callback => {

        let main = $.html( my.html.main );

        setUpNavigation();

        renderContent();

          renderFeedback();

        $.setContent( self.element, main );

        callback && callback();

        function setUpNavigation() {
          main.querySelector( "#header" ).innerHTML = my.navigation;

          [...main.querySelectorAll( '.navbar-nav  > li' )].map( li => {
            li.addEventListener( 'click', () => {
              [...main.querySelectorAll( '.navbar-nav  > li' )].map( li => {
                li.classList.remove( 'active' );
              } );
              li.classList.add( 'active' );
            } );
          } );

          main.querySelector( ".navbar-toggle").addEventListener( 'click', () => {
            main.querySelector( ".navbar-toggle" ).classList.toggle( 'collapsed' );
            main.querySelector( ".navbar-collapse" ).classList.toggle( 'in' );
          } );

          main.querySelector( "#home").addEventListener( 'click', () => {
            renderContent();
          } );

          main.querySelector( "#script").addEventListener( 'click', () => {
            const div = getDiv();
            my.pdf_viewer.start( { root: div }, () => {
              $.setContent( main.querySelector( "#article" ), div );
            } );

          } );

          main.querySelector( "#stat" ).addEventListener( 'click', () => {
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
            main.querySelector( '#article' ).innerHTML = my.help;
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
          my.feedback.start( { root: main.querySelector( '#feedback' ) } );
        }

        function getDiv() {
          const div = document.createElement( 'div' );
          div.setAttribute( 'class', "container" );

          return div;
        }

      };
    }
  };

  function p(){window.ccm[v].component(component)}const f="ccm."+component.name+(component.version?"-"+component.version.join("."):"")+".js";if(window.ccm&&null===window.ccm.files[f])window.ccm.files[f]=component;else{const n=window.ccm&&window.ccm.components[component.name];n&&n.ccm&&(component.ccm=n.ccm),"string"==typeof component.ccm&&(component.ccm={url:component.ccm});var v=component.ccm.url.split("/").pop().split("-");if(v.length>1?(v=v[1].split("."),v.pop(),"min"===v[v.length-1]&&v.pop(),v=v.join(".")):v="latest",window.ccm&&window.ccm[v])p();else{const e=document.createElement("script");document.head.appendChild(e),component.ccm.integrity&&e.setAttribute("integrity",component.ccm.integrity),component.ccm.crossorigin&&e.setAttribute("crossorigin",component.ccm.crossorigin),e.onload=function(){p(),document.head.removeChild(e)},e.src=component.ccm.url}}
}