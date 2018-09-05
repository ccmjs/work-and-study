/**
 * @overview datasets of ccm.be_2 app
 * @author Tea Kless <tea.kless@web.de> 2018
 * @license The MIT License (MIT)
 */

ccm.files[ 'datasets.js' ] = {
  "orientation": {
    "key": "orientation",
    "section": "Orientation",
    "entries": [
      {
        "title": '<span class="fa fa-pencil-square-o"></span> Key Terminology of Entrepreneurship',
        "content": [ "ccm.instance", "https://ccmjs.github.io/akless-components/cloze/versions/ccm.cloze-4.1.0.js", {
          "key": [ "ccm.get", { "store": "w2c_cloze", "url": "https://ccm2.inf.h-brs.de" }, "1526550731302X4453331659613695" ],
          "onfinish": {
            "alert": "Saved!",
            "store": {
              "settings": { "store": "be2_ws18_cloze_results", "url": "https://ccm2.inf.h-brs.de" },
              "key": "key_terminology_of_entrepreneurship"
            }
          }
        } ]
      },
      {
        "title": '<span class="fa fa-pencil-square-o"></span> Synonyms for “Business”',
        "content": [ "ccm.instance", "https://ccmjs.github.io/akless-components/cloze/versions/ccm.cloze-4.1.0.js", {
          "key": [ "ccm.get", { "store": "w2c_cloze", "url": "https://ccm2.inf.h-brs.de" }, "1518690906548X9893455548879022" ],
          "onfinish": {
            "alert": "Saved!",
            "store": {
              "settings": { "store": "be2_ws18_cloze_results", "url": "https://ccm2.inf.h-brs.de" },
              "key": "synonyms_for_business"
            }
          }
        } ]
      },
      {
        "title": '<span class="fa fa-pencil-square-o"></span> Personal Characteristics',
        "content": [ "ccm.instance", "https://ccmjs.github.io/akless-components/cloze/versions/ccm.cloze-4.1.0.js", {
          "key": [ "ccm.get", { "store": "w2c_cloze", "url": "https://ccm2.inf.h-brs.de" }, "1526644134616X8657631128304384" ],
          "onfinish": {
            "alert": "Saved!",
            "store": {
              "settings": { "store": "be2_ws18_cloze_results", "url": "https://ccm2.inf.h-brs.de" },
              "key": "personal_characteristics"
            }
          }
        } ]
      },
      {
        "title": '<span class="fa fa-pencil-square-o"></span> Characteristics of Entrepreneurs',
        "content": [ "ccm.instance", "https://ccmjs.github.io/akless-components/cloze/versions/ccm.cloze-4.1.0.js", {
          "key": [ "ccm.get", { "store": "w2c_cloze", "url": "https://ccm2.inf.h-brs.de" }, "1526645829627X16013340042681" ],
          "onfinish": {
            "alert": "Saved!",
            "store": {
              "settings": { "store": "be2_ws18_cloze_results", "url": "https://ccm2.inf.h-brs.de" },
              "key": "characteristics_of_entrepreneurs"
            }
          }
        } ]
      },
      {
        "title": '<span class="fa fa-pencil-square-o"></span> Plagiarism Quiz',
        "content": [ "ccm.instance", "https://ccmjs.github.io/akless-components/cloze/versions/ccm.cloze-4.1.0.js", {
          "key": [ "ccm.get", { "store": "w2c_cloze", "url": "https://ccm2.inf.h-brs.de" }, "1526653091422X02273709883972974" ],
          "onfinish": {
            "alert": "Saved!",
            "store": {
              "settings": { "store": "be2_ws18_cloze_results", "url": "https://ccm2.inf.h-brs.de" },
              "key": "plagiarism_quiz"
            }
          }
        } ]
      },
      {
        "title": '<span class="fa fa-pencil-square-o"></span> Copyright Quiz',
        "content": [ "ccm.instance", "https://ccmjs.github.io/akless-components/cloze/versions/ccm.cloze-4.1.0.js", {
          "key": [ "ccm.get", { "store": "w2c_cloze", "url": "https://ccm2.inf.h-brs.de" }, "1518691705125X42220549120432294" ],
          "onfinish": {
            "alert": "Saved!",
            "store": {
              "settings": { "store": "be2_ws18_cloze_results", "url": "https://ccm2.inf.h-brs.de" },
              "key": "copyright_quiz"
            }
          }
        } ]
      }
    ]
  },

  "business_practices": {
    "key": "business_practices",
    "section": "Sustainable Business Practices",
    "entries": [
      {
        "title": '<span class="fa fa-pencil-square-o"></span> LCA Terminology',
        "content": [ "ccm.instance", "https://ccmjs.github.io/akless-components/cloze/versions/ccm.cloze-4.1.0.js", {
          "key": [ "ccm.get", { "store": "w2c_cloze", "url": "https://ccm2.inf.h-brs.de" }, "1518692231862X6906233038090239" ],
          "onfinish": {
            "alert": "Saved!",
            "store": {
              "settings": { "store": "be2_ws18_cloze_results", "url": "https://ccm2.inf.h-brs.de" },
              "key": "lca_terminology"
            }
          }
        } ]
      },
      {
        "title": '<span class="fa fa-pencil-square-o"></span> Prepositions',
        "content": [ "ccm.instance", "https://ccmjs.github.io/akless-components/cloze/versions/ccm.cloze-4.1.0.js", {
          "key": [ "ccm.get", { "store": "w2c_cloze", "url": "https://ccm2.inf.h-brs.de" }, "1532619098174X18358119379539728" ],
          "onfinish": {
            "alert": "Saved!",
            "store": {
              "settings": { "store": "be2_ws18_cloze_results", "url": "https://ccm2.inf.h-brs.de" },
              "key": "prepositions"
            }
          }
        } ]
      },
      {
        "title": '<span class="fa fa-pencil-square-o"></span> Environmental Impacts',
        "content": [ "ccm.instance", "https://ccmjs.github.io/akless-components/cloze/versions/ccm.cloze-4.1.0.js", {
          "key": [ "ccm.get", { "store": "w2c_cloze", "url": "https://ccm2.inf.h-brs.de" }, "1518692429575X48927297674072623" ],
          "onfinish": {
            "alert": "Saved!",
            "store": {
              "settings": { "store": "be2_ws18_cloze_results", "url": "https://ccm2.inf.h-brs.de" },
              "key": "environmental_impacts"
            }
          }
        } ]
      },
      {
        "title": '<span class="fa fa-pencil-square-o"></span> Sustainable Development Goals',
        "content": [ "ccm.instance", "https://ccmjs.github.io/akless-components/cloze/versions/ccm.cloze-4.1.0.js", {
          "key": [ "ccm.get", { "store": "w2c_cloze", "url": "https://ccm2.inf.h-brs.de" }, "1518692517201X6052264284794366" ],
          "onfinish": {
            "alert": "Saved!",
            "store": {
              "settings": { "store": "be2_ws18_cloze_results", "url": "https://ccm2.inf.h-brs.de" },
              "key": "sustainable_development_goals"
            }
          }
        } ]
      }
    ]
  },

  "company_structure": {
    "key": "company_structure",
    "section": "Company Structure",
    "entries": [
      {
        "title": '<span class="fa fa-pencil-square-o"></span> Defining Departments',
        "content": [ "ccm.instance", "https://ccmjs.github.io/akless-components/cloze/versions/ccm.cloze-4.1.0.js", {
          "key": [ "ccm.get", { "store": "w2c_cloze", "url": "https://ccm2.inf.h-brs.de" }, "1518692902389X770389262618334" ],
          "onfinish": {
            "alert": "Saved!",
            "store": {
              "settings": { "store": "be2_ws18_cloze_results", "url": "https://ccm2.inf.h-brs.de" },
              "key": "defining_departments"
            }
          }
        } ]
      },
      {
        "title": '<span class="fa fa-pencil-square-o"></span> Executives of a Company',
        "content": [ "ccm.instance", "https://ccmjs.github.io/akless-components/cloze/versions/ccm.cloze-4.1.0.js", {
          "key": [ "ccm.get", { "store": "w2c_cloze", "url": "https://ccm2.inf.h-brs.de" }, "1532534015993X3303798009929313" ],
          "onfinish": {
            "alert": "Saved!",
            "store": {
              "settings": { "store": "be2_ws18_cloze_results", "url": "https://ccm2.inf.h-brs.de" },
              "key": "executives_of_company"
            }
          }
        } ]
      },
      {
        "title": '<span class="fa fa-pencil-square-o"></span> Corporate Affairs',
        "content": [ "ccm.instance", "https://ccmjs.github.io/akless-components/cloze/versions/ccm.cloze-4.1.0.js", {
          "key": [ "ccm.get", { "store": "w2c_cloze", "url": "https://ccm2.inf.h-brs.de" }, "1525274879888X20147700616286301" ],
          "onfinish": {
            "alert": "Saved!",
            "store": {
              "settings": { "store": "be2_ws18_cloze_results", "url": "https://ccm2.inf.h-brs.de" },
              "key": "corporate_affairs"
            }
          }
        } ]
      },
      {
        "title": '<span class="fa fa-pencil-square-o"></span> Incorrect Word Partnerships',
        "content": [ "ccm.instance", "https://ccmjs.github.io/akless-components/cloze/versions/ccm.cloze-4.1.0.js", {
          "key": [ "ccm.get", { "store": "w2c_cloze", "url": "https://ccm2.inf.h-brs.de" }, "1525429066578X09371712618146733" ],
          "onfinish": {
            "alert": "Saved!",
            "store": {
              "settings": { "store": "be2_ws18_cloze_results", "url": "https://ccm2.inf.h-brs.de" },
              "key": "incorrect_word_partnerships"
            }
          }
        } ]
      },
      {
        "title": '<span class="fa fa-pencil-square-o"></span> Departments and Their Functions (Part I)',
        "content": [ "ccm.instance", "https://ccmjs.github.io/akless-components/cloze/versions/ccm.cloze-4.1.0.js", {
          "key": [ "ccm.get", { "store": "w2c_cloze", "url": "https://ccm2.inf.h-brs.de" }, "1532599227124X19808120468112445" ],
          "onfinish": {
            "alert": "Saved!",
            "store": {
              "settings": { "store": "be2_ws18_cloze_results", "url": "https://ccm2.inf.h-brs.de" },
              "key": "departments_and_their_functions_1"
            }
          }
        } ]
      },
      {
        "title": '<span class="fa fa-pencil-square-o"></span> Departments and Their Functions (Part II)',
        "content": [ "ccm.instance", "https://ccmjs.github.io/akless-components/cloze/versions/ccm.cloze-4.1.0.js", {
          "key": [ "ccm.get", { "store": "w2c_cloze", "url": "https://ccm2.inf.h-brs.de" }, "1532610566424X6242103490169981" ],
          "onfinish": {
            "alert": "Saved!",
            "store": {
              "settings": { "store": "be2_ws18_cloze_results", "url": "https://ccm2.inf.h-brs.de" },
              "key": "departments_and_their_functions_2"
            }
          }
        } ]
      }
    ]
  },

  "products_marketing": {
    "key": "products_marketing",
    "section":  "Products, Innovation and Marketing",
    "entries": [
      {
        "title": "<span class=\"fa fa-pencil-square-o\"></span> Language Learning Clues - Learning in Chunks 1",
        "content": [ "ccm.instance", "https://ccmjs.github.io/akless-components/cloze/versions/ccm.cloze-4.1.0.js", {
          "key": [ "ccm.get", { "store": "w2c_cloze", "url": "https://ccm2.inf.h-brs.de" }, "1525516094998X1208037518108378" ],
          "onfinish": {
            "alert": "Saved!",
            "store": {
              "settings": { "store": "be2_ws18_cloze_results", "url": "https://ccm2.inf.h-brs.de" },
              "key": "learning_chunks_1"
            }
          }
        } ]
      },
      {
        "title": "<span class=\"fa fa-pencil-square-o\"></span> Defining Marketing",
        "content": [ "ccm.instance", "https://ccmjs.github.io/akless-components/cloze/versions/ccm.cloze-4.1.0.js", {
          "key": [ "ccm.get", { "store": "w2c_cloze", "url": "https://ccm2.inf.h-brs.de" }, "1527521736795X212993536569414" ],
          "onfinish": {
            "alert": "Saved!",
            "store": {
              "settings": { "store": "be2_ws18_cloze_results", "url": "https://ccm2.inf.h-brs.de" },
              "key": "defining_marketing"
            }
          }
        } ]
      }
    ]
  },

  "accounting": {
    "key": "accounting",
    "section":  "Accounting",
    "entries": [
      {
        "title": "<span class=\"fa fa-pencil-square-o\"></span> Costs and Sales",
        "content": [ "ccm.instance", "https://ccmjs.github.io/akless-components/cloze/versions/ccm.cloze-4.1.0.js", {
          "key": [ "ccm.get", { "store": "w2c_cloze", "url": "https://ccm2.inf.h-brs.de" }, "1530966682311X3288463996724147" ],
          "onfinish": {
            "alert": "Saved!",
            "store": {
              "settings": { "store": "be2_ws18_cloze_results", "url": "https://ccm2.inf.h-brs.de" },
              "key": "costs_and_sales"
            }
          }
        } ]
      },
      {
        "title": "<span class=\"fa fa-pencil-square-o\"></span> Earnings and Income",
        "content": [ "ccm.instance", "https://ccmjs.github.io/akless-components/cloze/versions/ccm.cloze-4.1.0.js", {
          "key": [ "ccm.get", { "store": "w2c_cloze", "url": "https://ccm2.inf.h-brs.de" }, "1530968426612X7535689750005543" ],
          "onfinish": {
            "alert": "Saved!",
            "store": {
              "settings": { "store": "be2_ws18_cloze_results", "url": "https://ccm2.inf.h-brs.de" },
              "key": "earnings_and_income"
            }
          }
        } ]
      }
    ]
  },

  "finance_start_ups": {
    "key": "finance_start_ups",
    "section":  "Finance Start-ups",
    "entries": [
      {
        "title": "<span class=\"fa fa-pencil-square-o\"></span> Defining Crowdfunding",
        "content": [ "ccm.instance", "https://ccmjs.github.io/akless-components/cloze/versions/ccm.cloze-4.1.0.js", {
          "key": [ "ccm.get", { "store": "w2c_cloze", "url": "https://ccm2.inf.h-brs.de" }, "1530969258661X8952191393680538" ],
          "onfinish": {
            "alert": "Saved!",
            "store": {
              "settings": { "store": "be2_ws18_cloze_results", "url": "https://ccm2.inf.h-brs.de" },
              "key": "defining_crowdfunding"
            }
          }
        } ]
      },
      {
        "title": "<span class=\"fa fa-pencil-square-o\"></span> Start-up Funding",
        "content": [ "ccm.instance", "https://ccmjs.github.io/akless-components/cloze/versions/ccm.cloze-4.1.0.js", {
          "key": [ "ccm.get", { "store": "w2c_cloze", "url": "https://ccm2.inf.h-brs.de" }, "1530970776433X549867791496941" ],
          "onfinish": {
            "alert": "Saved!",
            "store": {
              "settings": { "store": "be2_ws18_cloze_results", "url": "https://ccm2.inf.h-brs.de" },
              "key": "start_up_funding"
            }
          }
        } ]
      },
      {
        "title": "<span class=\"fa fa-pencil-square-o\"></span> Start Ups",
        "content": [ "ccm.instance", "https://ccmjs.github.io/akless-components/cloze/versions/ccm.cloze-4.1.0.js", {
          "key": [ "ccm.get", { "store": "w2c_cloze", "url": "https://ccm2.inf.h-brs.de" }, "1530971554774X21313620784110165" ],
          "onfinish": {
            "alert": "Saved!",
            "store": {
              "settings": { "store": "be2_ws18_cloze_results", "url": "https://ccm2.inf.h-brs.de" },
              "key": "start_ups"
            }
          }
        } ]
      },
      {
        "title": "<span class=\"fa fa-pencil-square-o\"></span> Language Learning Clues - Learning in Chunks 2",
        "content": [ "ccm.instance", "https://ccmjs.github.io/akless-components/cloze/versions/ccm.cloze-4.1.0.js", {
          "key": [ "ccm.get", { "store": "w2c_cloze", "url": "https://ccm2.inf.h-brs.de" }, "1530972383963X023199007860386756" ],
          "onfinish": {
            "alert": "Saved!",
            "store": {
              "settings": { "store": "be2_ws18_cloze_results", "url": "https://ccm2.inf.h-brs.de" },
              "key": "learning_chunks_2"
            }
          }
        } ]
      }
    ]
  },

  "academic_writing": {
    "key": "academic_writing",
    "section": "Academic Writing",
    "entries": [
      {
        "title": "<span class=\"fa fa-pencil-square-o\"></span> Writing a Paper",
        "content": [ "ccm.instance", "https://ccmjs.github.io/akless-components/cloze/versions/ccm.cloze-4.1.0.js", {
          "key": [ "ccm.get", { "store": "w2c_cloze", "url": "https://ccm2.inf.h-brs.de" }, "1531468430914X9382301716358374" ],
          "onfinish": {
            "alert": "Saved!",
            "store": {
              "settings": { "store": "be2_ws18_cloze_results", "url": "https://ccm2.inf.h-brs.de" },
              "key": "writing_paper"
            }
          }
        } ]
      },
      {
        "title": "<span class=\"fa fa-pencil-square-o\"></span> Writing a Paper: Procedure",
        "content": [ "ccm.instance", "https://ccmjs.github.io/akless-components/cloze/versions/ccm.cloze-4.1.0.js", {
          "key": [ "ccm.get", { "store": "w2c_cloze", "url": "https://ccm2.inf.h-brs.de" }, "1531469742696X42442522991677545" ],
          "onfinish": {
            "alert": "Saved!",
            "store": {
              "settings": { "store": "be2_ws18_cloze_results", "url": "https://ccm2.inf.h-brs.de" },
              "key": "writing_procedure"
            }
          }
        } ]
      },
      {
        "title": "<span class=\"fa fa-pencil-square-o\"></span> Elements of a Report",
        "content": [ "ccm.instance", "https://ccmjs.github.io/akless-components/cloze/versions/ccm.cloze-4.1.0.js", {
          "key": [ "ccm.get", { "store": "w2c_cloze", "url": "https://ccm2.inf.h-brs.de" }, "1531471015039X27400901492652463" ],
          "onfinish": {
            "alert": "Saved!",
            "store": {
              "settings": { "store": "be2_ws18_cloze_results", "url": "https://ccm2.inf.h-brs.de" },
              "key": "elements_of_report"
            }
          }
        } ]
      },
      {
        "title": "<span class=\"fa fa-pencil-square-o\"></span> Key Words and Phrases",
        "content": [ "ccm.instance", "https://ccmjs.github.io/akless-components/cloze/versions/ccm.cloze-4.1.0.js", {
          "key": [ "ccm.get", { "store": "w2c_cloze", "url": "https://ccm2.inf.h-brs.de" }, "1531472277201X06353161050037825" ],
          "onfinish": {
            "alert": "Saved!",
            "store": {
              "settings": { "store": "be2_ws18_cloze_results", "url": "https://ccm2.inf.h-brs.de" },
              "key": "keywords_and_phrases"
            }
          }
        } ]
      },
      {
        "title": "<span class=\"fa fa-pencil-square-o\"></span> Synonyms 1",
        "content": [ "ccm.instance", "https://ccmjs.github.io/akless-components/cloze/versions/ccm.cloze-4.1.0.js", {
          "key": [ "ccm.get", { "store": "w2c_cloze", "url": "https://ccm2.inf.h-brs.de" }, "1531473258556X7402482042781462" ],
          "onfinish": {
            "alert": "Saved!",
            "store": {
              "settings": { "store": "be2_ws18_cloze_results", "url": "https://ccm2.inf.h-brs.de" },
              "key": "synonyms_1"
            }
          }
        } ]
      },
      {
        "title": "<span class=\"fa fa-pencil-square-o\"></span> Synonyms 2",
        "content": [ "ccm.instance", "https://ccmjs.github.io/akless-components/cloze/versions/ccm.cloze-4.1.0.js", {
          "key": [ "ccm.get", { "store": "w2c_cloze", "url": "https://ccm2.inf.h-brs.de" }, "1531473763591X5399771561478452" ],
          "onfinish": {
            "alert": "Saved!",
            "store": {
              "settings": { "store": "be2_ws18_cloze_results", "url": "https://ccm2.inf.h-brs.de" },
              "key": "synonyms_2"
            }
          }
        } ]
      },
      {
        "title": "<span class=\"fa fa-pencil-square-o\"></span> Word Formations",
        "content": [ "ccm.instance", "https://ccmjs.github.io/akless-components/cloze/versions/ccm.cloze-4.1.0.js", {
          "key": [ "ccm.get", { "store": "w2c_cloze", "url": "https://ccm2.inf.h-brs.de" }, "1531474250227X9103298982633563" ],
          "onfinish": {
            "alert": "Saved!",
            "store": {
              "settings": { "store": "be2_ws18_cloze_results", "url": "https://ccm2.inf.h-brs.de" },
              "key": "word_formations"
            }
          }
        } ]
      },
      {
        "title": "<span class=\"fa fa-pencil-square-o\"></span> Harvard Style Guide",
        "content": [ "ccm.instance", "https://ccmjs.github.io/akless-components/cloze/versions/ccm.cloze-4.1.0.js", {
          "key": [ "ccm.get", { "store": "w2c_cloze", "url": "https://ccm2.inf.h-brs.de" }, "1531993681764X7543255385841261" ],
          "onfinish": {
            "alert": "Saved!",
            "store": {
              "settings": { "store": "be2_ws18_cloze_results", "url": "https://ccm2.inf.h-brs.de" },
              "key": "harvard_style_guide"
            }
          }
        } ]
      },
      {
        "title": "<span class=\"fa fa-pencil-square-o\"></span> Proofreading and Editing",
        "content": [ "ccm.instance", "https://ccmjs.github.io/akless-components/cloze/versions/ccm.cloze-4.1.0.js", {
          "key": [ "ccm.get", { "store": "w2c_cloze", "url": "https://ccm2.inf.h-brs.de" }, "1531994295903X8478028230378629" ],
          "onfinish": {
            "alert": "Saved!",
            "store": {
              "settings": { "store": "be2_ws18_cloze_results", "url": "https://ccm2.inf.h-brs.de" },
              "key": "proofreading_and_editing"
            }
          }
        } ]
      },
     {
        "title": "<span class=\"fa fa-pencil-square-o\"></span> Proofreading (Teil 1)",
       "content": [ "ccm.instance", "https://ccmjs.github.io/akless-components/cloze/versions/ccm.cloze-4.1.0.js", {
         "key": [ "ccm.get", { "store": "w2c_cloze", "url": "https://ccm2.inf.h-brs.de" }, "1531996286677X7734645357100738" ],
         "onfinish": {
           "alert": "Saved!",
           "store": {
             "settings": { "store": "be2_ws18_cloze_results", "url": "https://ccm2.inf.h-brs.de" },
             "key": "proofreading_1"
           }
         }
       } ]
      },
      {
        "title": "<span class=\"fa fa-pencil-square-o\"></span> Proofreading (Teil 2)",
        "content": [ "ccm.instance", "https://ccmjs.github.io/akless-components/cloze/versions/ccm.cloze-4.1.0.js", {
          "key": [ "ccm.get", { "store": "w2c_cloze", "url": "https://ccm2.inf.h-brs.de" }, "1531998101907X3907868591412964" ],
          "onfinish": {
            "alert": "Saved!",
            "store": {
              "settings": { "store": "be2_ws18_cloze_results", "url": "https://ccm2.inf.h-brs.de" },
              "key": "proofreading_2"
            }
          }
        } ]
      }
    ]
  },

  "exam_preparation": {
    "key": "exam_preparation",
    "section": "Exam Preparation",
    "entries": [
      {
        "title": "<span class=\"fa fa-pencil-square-o\"></span> Abbreviated Business Terms",
        "content": [ "ccm.instance", "https://ccmjs.github.io/akless-components/cloze/versions/ccm.cloze-4.1.0.js", {
          "key": [ "ccm.get", { "store": "w2c_cloze", "url": "https://ccm2.inf.h-brs.de" }, "1531999174809X1458215719642837" ],
          "onfinish": {
            "alert": "Saved!",
            "store": {
              "settings": { "store": "be2_ws18_cloze_results", "url": "https://ccm2.inf.h-brs.de" },
              "key": "abbreviated_business_terms"
            }
          }
        } ]
      },
      {
        "title": "<span class=\"fa fa-pencil-square-o\"></span> Review Business Terms",
        "content": [ "ccm.instance", "https://ccmjs.github.io/akless-components/cloze/versions/ccm.cloze-4.1.0.js", {
          "key": [ "ccm.get", { "store": "w2c_cloze", "url": "https://ccm2.inf.h-brs.de" }, "1532000417081X3524240194379842" ],
          "onfinish": {
            "alert": "Saved!",
            "store": {
              "settings": { "store": "be2_ws18_cloze_results", "url": "https://ccm2.inf.h-brs.de" },
              "key": "review_business_terms"
            }
          }
        } ]
      },
      {
        "title": "<span class=\"fa fa-pencil-square-o\"></span> Differentiating Adverbs and Adjectives",
        "content": [ "ccm.instance", "https://ccmjs.github.io/akless-components/cloze/versions/ccm.cloze-4.1.0.js", {
          "key": [ "ccm.get", { "store": "w2c_cloze", "url": "https://ccm2.inf.h-brs.de" }, "1532002466475X8703464196203523" ],
          "onfinish": {
            "alert": "Saved!",
            "store": {
              "settings": { "store": "be2_ws18_cloze_results", "url": "https://ccm2.inf.h-brs.de" },
              "key": "differentiating_adverbs_and_adjectives"
            }
          }
        } ]
      }
    ]
  }

};