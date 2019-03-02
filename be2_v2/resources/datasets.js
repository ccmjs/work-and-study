/**
 * @overview datasets of ccm component for business english app
 * @author Tea Kless <tea.kless@web.de> 2018
 * @license The MIT License (MIT)
 */

ccm.files[ 'datasets.js' ] = {

  "orientation": {
    "key": "orientation",
    "section": "Orientation",
    "entries": [
      {
        "title": '<span class="fas fa-pencil-alt"></span> Key Terminology of Entrepreneurship',
        "data": {
          "component": "cloze",
          "id": "1526550731302X4453331659613695",
          "key": "key_terminology_of_entrepreneurship"
        }
      },
      {
        "title": '<span class="fas fa-pencil-alt"></span> Synonyms for “Business”',
        "data": {
          "component": "cloze",
          "id": "1518690906548X9893455548879022",
          "key": "synonyms_for_business"
        }
      },
      {
        "title": '<span class="fas fa-pencil-alt"></span> Personal Characteristics',
        "data": {
          "component": "cloze",
          "id": "1526644134616X8657631128304384",
          "key": "personal_characteristics"
        }
      },
      {
        "title": '<span class="fas fa-pencil-alt"></span> Characteristics of Entrepreneurs',
        "data": {
          "component": "cloze",
          "id": "1526645829627X16013340042681",
          "key": "characteristics_of_entrepreneurs"
        }
      },
      {
        "title": '<span class="fas fa-pencil-alt"></span> Plagiarism Quiz',
        "data": {
          "component": "cloze",
          "id": "1526653091422X02273709883972974",
          "key": "plagiarism_quiz"
        }
      },
      {
        "title": '<span class="fas fa-pencil-alt"></span> Copyright Quiz',
        "data": {
          "component": "cloze",
          "id": "1518691705125X42220549120432294",
          "key": "copyright_quiz"
        }
      }
    ]
  },

  "business_practices": {
    "key": "business_practices",
    "section": "Sustainable Business Practices",
    "entries": [
      {
        "title": '<span class="fa fa-pencil-square-o"></span> LCA Terminology',
        "data": {
          "component": "cloze",
          "id": "1518692231862X6906233038090239",
          "key": "lca_terminology"
        }
      },
      {
        "title": '<span class="fa fa-pencil-square-o"></span> Prepositions',
        "data": {
          "component": "cloze",
          "id": "1532619098174X18358119379539728",
          "key": "prepositions"
        }
      },
      {
        "title": '<span class="fa fa-pencil-square-o"></span> Environmental Impacts',
        "data": {
          "component": "cloze",
          "id": "1518692429575X48927297674072623",
          "key": "environmental_impacts"
        }
      },
      {
        "title": '<span class="fa fa-pencil-square-o"></span> Sustainable Development Goals',
        "data": {
          "component": "cloze",
          "id": "1518692517201X6052264284794366",
          "key": "sustainable_development_goals"
        }
      }
    ]
  },

  /*"company_structure": {
    "key": "company_structure",
    "section": "Company Structure",
    "entries": [
      {
        "title": '<span class="fa fa-pencil-square-o"></span> Defining Departments',
        "content": [ "ccm.instance", "https://ccmjs.github.io/akless-components/cloze/versions/ccm.cloze-4.1.0.js", {
          "key": [ "ccm.get", { "store": "w&s_cloze", "url": "https://ccm2.inf.h-brs.de" }, "1518692902389X770389262618334" ],
          "data": {
            "store": [ "ccm.store", { "store": "be2_ws18_cloze_results", "url": "https://ccm2.inf.h-brs.de", "method": "POST" } ],
            "key": "defining_departments",
            "user": true
          },
          "onfinish": {
            "login": true,
            "store": {
              "settings": {
                "url": "https://ccm2.inf.h-brs.de",
                "method": "POST",
                "store": "be2_ws18_cloze_results"
              },
              "key": "defining_departments",
              "user": true,
              "permissions": {
                "creator": "teacher",
                "realm": "guest",
                "group": [ "%user%" ],
                "access": {
                  "get": "group",
                  "set": "creator",
                  "del": "creator"
                }
              }
            },
            "alert": "Saved for your student analytics!",
            "restart": true
          }
        } ]
      },
      {
        "title": '<span class="fa fa-pencil-square-o"></span> Executives of a Company',
        "content": [ "ccm.instance", "https://ccmjs.github.io/akless-components/cloze/versions/ccm.cloze-4.1.0.js", {
          "key": [ "ccm.get", { "store": "w&s_cloze", "url": "https://ccm2.inf.h-brs.de" }, "1532534015993X3303798009929313" ],
          "data": {
            "store": [ "ccm.store", { "store": "be2_ws18_cloze_results", "url": "https://ccm2.inf.h-brs.de", "method": "POST" } ],
            "key": "executives_of_company",
            "user": true
          },
          "onfinish": {
            "login": true,
            "store": {
              "settings": {
                "url": "https://ccm2.inf.h-brs.de",
                "method": "POST",
                "store": "be2_ws18_cloze_results"
              },
              "key": "executives_of_company",
              "user": true,
              "permissions": {
                "creator": "teacher",
                "realm": "guest",
                "group": [ "%user%" ],
                "access": {
                  "get": "group",
                  "set": "creator",
                  "del": "creator"
                }
              }
            },
            "alert": "Saved for your student analytics!",
            "restart": true
          }
        } ]
      },
      {
        "title": '<span class="fa fa-pencil-square-o"></span> Corporate Affairs',
        "content": [ "ccm.instance", "https://ccmjs.github.io/akless-components/cloze/versions/ccm.cloze-4.1.0.js", {
          "key": [ "ccm.get", { "store": "w&s_cloze", "url": "https://ccm2.inf.h-brs.de" }, "1525274879888X20147700616286301" ],
          "data": {
            "store": [ "ccm.store", { "store": "be2_ws18_cloze_results", "url": "https://ccm2.inf.h-brs.de", "method": "POST" } ],
            "key": "corporate_affairs",
            "user": true
          },
          "onfinish": {
            "login": true,
            "store": {
              "settings": {
                "url": "https://ccm2.inf.h-brs.de",
                "method": "POST",
                "store": "be2_ws18_cloze_results"
              },
              "key": "corporate_affairs",
              "user": true,
              "permissions": {
                "creator": "teacher",
                "realm": "guest",
                "group": [ "%user%" ],
                "access": {
                  "get": "group",
                  "set": "creator",
                  "del": "creator"
                }
              }
            },
            "alert": "Saved for your student analytics!",
            "restart": true
          }
        } ]
      },
      {
        "title": '<span class="fa fa-pencil-square-o"></span> Incorrect Word Partnerships',
        "content": [ "ccm.instance", "https://ccmjs.github.io/akless-components/cloze/versions/ccm.cloze-4.1.0.js", {
          "key": [ "ccm.get", { "store": "w&s_cloze", "url": "https://ccm2.inf.h-brs.de" }, "1525429066578X09371712618146733" ],
          "data": {
            "store": [ "ccm.store", { "store": "be2_ws18_cloze_results", "url": "https://ccm2.inf.h-brs.de", "method": "POST" } ],
            "key": "incorrect_word_partnerships",
            "user": true
          },
          "onfinish": {
            "login": true,
            "store": {
              "settings": {
                "url": "https://ccm2.inf.h-brs.de",
                "method": "POST",
                "store": "be2_ws18_cloze_results"
              },
              "key": "incorrect_word_partnerships",
              "user": true,
              "permissions": {
                "creator": "teacher",
                "realm": "guest",
                "group": [ "%user%" ],
                "access": {
                  "get": "group",
                  "set": "creator",
                  "del": "creator"
                }
              }
            },
            "alert": "Saved for your student analytics!",
            "restart": true
          }
        } ]
      },
      {
        "title": '<span class="fa fa-pencil-square-o"></span> Departments and Their Functions (Part I)',
        "content": [ "ccm.instance", "https://ccmjs.github.io/akless-components/cloze/versions/ccm.cloze-4.1.0.js", {
          "key": [ "ccm.get", { "store": "w&s_cloze", "url": "https://ccm2.inf.h-brs.de" }, "1532599227124X19808120468112445" ],
          "data": {
            "store": [ "ccm.store", { "store": "be2_ws18_cloze_results", "url": "https://ccm2.inf.h-brs.de", "method": "POST" } ],
            "key": "departments_and_their_functions_1",
            "user": true
          },
          "onfinish": {
            "login": true,
            "store": {
              "settings": {
                "url": "https://ccm2.inf.h-brs.de",
                "method": "POST",
                "store": "be2_ws18_cloze_results"
              },
              "key": "departments_and_their_functions_1",
              "user": true,
              "permissions": {
                "creator": "teacher",
                "realm": "guest",
                "group": [ "%user%" ],
                "access": {
                  "get": "group",
                  "set": "creator",
                  "del": "creator"
                }
              }
            },
            "alert": "Saved for your student analytics!",
            "restart": true
          }
        } ]
      },
      {
        "title": '<span class="fa fa-pencil-square-o"></span> Departments and Their Functions (Part II)',
        "content": [ "ccm.instance", "https://ccmjs.github.io/akless-components/cloze/versions/ccm.cloze-4.1.0.js", {
          "key": [ "ccm.get", { "store": "w&s_cloze", "url": "https://ccm2.inf.h-brs.de" }, "1532610566424X6242103490169981" ],
          "data": {
            "store": [ "ccm.store", { "store": "be2_ws18_cloze_results", "url": "https://ccm2.inf.h-brs.de", "method": "POST" } ],
            "key": "departments_and_their_functions_2",
            "user": true
          },
          "onfinish": {
            "login": true,
            "store": {
              "settings": {
                "url": "https://ccm2.inf.h-brs.de",
                "method": "POST",
                "store": "be2_ws18_cloze_results"
              },
              "key": "departments_and_their_functions_2",
              "user": true,
              "permissions": {
                "creator": "teacher",
                "realm": "guest",
                "group": [ "%user%" ],
                "access": {
                  "get": "group",
                  "set": "creator",
                  "del": "creator"
                }
              }
            },
            "alert": "Saved for your student analytics!",
            "restart": true
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
          "key": [ "ccm.get", { "store": "w&s_cloze", "url": "https://ccm2.inf.h-brs.de" }, "1525516094998X1208037518108378" ],
          "data": {
            "store": [ "ccm.store", { "store": "be2_ws18_cloze_results", "url": "https://ccm2.inf.h-brs.de", "method": "POST" } ],
            "key": "learning_chunks_1",
            "user": true
          },
          "onfinish": {
            "login": true,
            "store": {
              "settings": {
                "url": "https://ccm2.inf.h-brs.de",
                "method": "POST",
                "store": "be2_ws18_cloze_results"
              },
              "key": "learning_chunks_1",
              "user": true,
              "permissions": {
                "creator": "teacher",
                "realm": "guest",
                "group": [ "%user%" ],
                "access": {
                  "get": "group",
                  "set": "creator",
                  "del": "creator"
                }
              }
            },
            "alert": "Saved for your student analytics!",
            "restart": true
          }
        } ]
      },
      {
        "title": "<span class=\"fa fa-pencil-square-o\"></span> Defining Marketing",
        "content": [ "ccm.instance", "https://ccmjs.github.io/akless-components/cloze/versions/ccm.cloze-4.1.0.js", {
          "key": [ "ccm.get", { "store": "w&s_cloze", "url": "https://ccm2.inf.h-brs.de" }, "1527521736795X212993536569414" ],
          "data": {
            "store": [ "ccm.store", { "store": "be2_ws18_cloze_results", "url": "https://ccm2.inf.h-brs.de", "method": "POST" } ],
            "key": "defining_marketing",
            "user": true
          },
          "onfinish": {
            "login": true,
            "store": {
              "settings": {
                "url": "https://ccm2.inf.h-brs.de",
                "method": "POST",
                "store": "be2_ws18_cloze_results"
              },
              "key": "defining_marketing",
              "user": true,
              "permissions": {
                "creator": "teacher",
                "realm": "guest",
                "group": [ "%user%" ],
                "access": {
                  "get": "group",
                  "set": "creator",
                  "del": "creator"
                }
              }
            },
            "alert": "Saved for your student analytics!",
            "restart": true
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
          "key": [ "ccm.get", { "store": "w&s_cloze", "url": "https://ccm2.inf.h-brs.de" }, "1530966682311X3288463996724147" ],
          "data": {
            "store": [ "ccm.store", { "store": "be2_ws18_cloze_results", "url": "https://ccm2.inf.h-brs.de", "method": "POST" } ],
            "key": "costs_and_sales",
            "user": true
          },
          "onfinish": {
            "login": true,
            "store": {
              "settings": {
                "url": "https://ccm2.inf.h-brs.de",
                "method": "POST",
                "store": "be2_ws18_cloze_results"
              },
              "key": "costs_and_sales",
              "user": true,
              "permissions": {
                "creator": "teacher",
                "realm": "guest",
                "group": [ "%user%" ],
                "access": {
                  "get": "group",
                  "set": "creator",
                  "del": "creator"
                }
              }
            },
            "alert": "Saved for your student analytics!",
            "restart": true
          }
        } ]
      },
      {
        "title": "<span class=\"fa fa-pencil-square-o\"></span> Earnings and Income",
        "content": [ "ccm.instance", "https://ccmjs.github.io/akless-components/cloze/versions/ccm.cloze-4.1.0.js", {
          "key": [ "ccm.get", { "store": "w&s_cloze", "url": "https://ccm2.inf.h-brs.de" }, "1530968426612X7535689750005543" ],
          "data": {
            "store": [ "ccm.store", { "store": "be2_ws18_cloze_results", "url": "https://ccm2.inf.h-brs.de", "method": "POST" } ],
            "key": "earnings_and_income",
            "user": true
          },
          "onfinish": {
            "login": true,
            "store": {
              "settings": {
                "url": "https://ccm2.inf.h-brs.de",
                "method": "POST",
                "store": "be2_ws18_cloze_results"
              },
              "key": "earnings_and_income",
              "user": true,
              "permissions": {
                "creator": "teacher",
                "realm": "guest",
                "group": [ "%user%" ],
                "access": {
                  "get": "group",
                  "set": "creator",
                  "del": "creator"
                }
              }
            },
            "alert": "Saved for your student analytics!",
            "restart": true
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
          "key": [ "ccm.get", { "store": "w&s_cloze", "url": "https://ccm2.inf.h-brs.de" }, "1530969258661X8952191393680538" ],
          "data": {
            "store": [ "ccm.store", { "store": "be2_ws18_cloze_results", "url": "https://ccm2.inf.h-brs.de", "method": "POST" } ],
            "key": "defining_crowdfunding",
            "user": true
          },
          "onfinish": {
            "login": true,
            "store": {
              "settings": {
                "url": "https://ccm2.inf.h-brs.de",
                "method": "POST",
                "store": "be2_ws18_cloze_results"
              },
              "key": "defining_crowdfunding",
              "user": true,
              "permissions": {
                "creator": "teacher",
                "realm": "guest",
                "group": [ "%user%" ],
                "access": {
                  "get": "group",
                  "set": "creator",
                  "del": "creator"
                }
              }
            },
            "alert": "Saved for your student analytics!",
            "restart": true
          }
        } ]
      },
      {
        "title": "<span class=\"fa fa-pencil-square-o\"></span> Start-up Funding",
        "content": [ "ccm.instance", "https://ccmjs.github.io/akless-components/cloze/versions/ccm.cloze-4.1.0.js", {
          "key": [ "ccm.get", { "store": "w&s_cloze", "url": "https://ccm2.inf.h-brs.de" }, "1530970776433X549867791496941" ],
          "data": {
            "store": [ "ccm.store", { "store": "be2_ws18_cloze_results", "url": "https://ccm2.inf.h-brs.de", "method": "POST" } ],
            "key": "start_up_funding",
            "user": true
          },
          "onfinish": {
            "login": true,
            "store": {
              "settings": {
                "url": "https://ccm2.inf.h-brs.de",
                "method": "POST",
                "store": "be2_ws18_cloze_results"
              },
              "key": "start_up_funding",
              "user": true,
              "permissions": {
                "creator": "teacher",
                "realm": "guest",
                "group": [ "%user%" ],
                "access": {
                  "get": "group",
                  "set": "creator",
                  "del": "creator"
                }
              }
            },
            "alert": "Saved for your student analytics!",
            "restart": true
          }
        } ]
      },
      {
        "title": "<span class=\"fa fa-pencil-square-o\"></span> Start Ups",
        "content": [ "ccm.instance", "https://ccmjs.github.io/akless-components/cloze/versions/ccm.cloze-4.1.0.js", {
          "key": [ "ccm.get", { "store": "w&s_cloze", "url": "https://ccm2.inf.h-brs.de" }, "1530971554774X21313620784110165" ],
          "data": {
            "store": [ "ccm.store", { "store": "be2_ws18_cloze_results", "url": "https://ccm2.inf.h-brs.de", "method": "POST" } ],
            "key": "start_ups",
            "user": true
          },
          "onfinish": {
            "login": true,
            "store": {
              "settings": {
                "url": "https://ccm2.inf.h-brs.de",
                "method": "POST",
                "store": "be2_ws18_cloze_results"
              },
              "key": "start_ups",
              "user": true,
              "permissions": {
                "creator": "teacher",
                "realm": "guest",
                "group": [ "%user%" ],
                "access": {
                  "get": "group",
                  "set": "creator",
                  "del": "creator"
                }
              }
            },
            "alert": "Saved for your student analytics!",
            "restart": true
          }
        } ]
      },
      {
        "title": "<span class=\"fa fa-pencil-square-o\"></span> Language Learning Clues - Learning in Chunks 2",
        "content": [ "ccm.instance", "https://ccmjs.github.io/akless-components/cloze/versions/ccm.cloze-4.1.0.js", {
          "key": [ "ccm.get", { "store": "w&s_cloze", "url": "https://ccm2.inf.h-brs.de" }, "1530972383963X023199007860386756" ],
          "data": {
            "store": [ "ccm.store", { "store": "be2_ws18_cloze_results", "url": "https://ccm2.inf.h-brs.de", "method": "POST" } ],
            "key": "learning_chunks_2",
            "user": true
          },
          "onfinish": {
            "login": true,
            "store": {
              "settings": {
                "url": "https://ccm2.inf.h-brs.de",
                "method": "POST",
                "store": "be2_ws18_cloze_results"
              },
              "key": "learning_chunks_2",
              "user": true,
              "permissions": {
                "creator": "teacher",
                "realm": "guest",
                "group": [ "%user%" ],
                "access": {
                  "get": "group",
                  "set": "creator",
                  "del": "creator"
                }
              }
            },
            "alert": "Saved for your student analytics!",
            "restart": true
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
          "key": [ "ccm.get", { "store": "w&s_cloze", "url": "https://ccm2.inf.h-brs.de" }, "1531468430914X9382301716358374" ],
          "data": {
            "store": [ "ccm.store", { "store": "be2_ws18_cloze_results", "url": "https://ccm2.inf.h-brs.de", "method": "POST" } ],
            "key": "writing_paper",
            "user": true
          },
          "onfinish": {
            "login": true,
            "store": {
              "settings": {
                "url": "https://ccm2.inf.h-brs.de",
                "method": "POST",
                "store": "be2_ws18_cloze_results"
              },
              "key": "writing_paper",
              "user": true,
              "permissions": {
                "creator": "teacher",
                "realm": "guest",
                "group": [ "%user%" ],
                "access": {
                  "get": "group",
                  "set": "creator",
                  "del": "creator"
                }
              }
            },
            "alert": "Saved for your student analytics!",
            "restart": true
          }
        } ]
      },
      {
        "title": "<span class=\"fa fa-pencil-square-o\"></span> Writing a Paper: Procedure",
        "content": [ "ccm.instance", "https://ccmjs.github.io/akless-components/cloze/versions/ccm.cloze-4.1.0.js", {
          "key": [ "ccm.get", { "store": "w&s_cloze", "url": "https://ccm2.inf.h-brs.de" }, "1531469742696X42442522991677545" ],
          "data": {
            "store": [ "ccm.store", { "store": "be2_ws18_cloze_results", "url": "https://ccm2.inf.h-brs.de", "method": "POST" } ],
            "key": "writing_procedure",
            "user": true
          },
          "onfinish": {
            "login": true,
            "store": {
              "settings": {
                "url": "https://ccm2.inf.h-brs.de",
                "method": "POST",
                "store": "be2_ws18_cloze_results"
              },
              "key": "writing_procedure",
              "user": true,
              "permissions": {
                "creator": "teacher",
                "realm": "guest",
                "group": [ "%user%" ],
                "access": {
                  "get": "group",
                  "set": "creator",
                  "del": "creator"
                }
              }
            },
            "alert": "Saved for your student analytics!",
            "restart": true
          }
        } ]
      },
      {
        "title": "<span class=\"fa fa-pencil-square-o\"></span> Elements of a Report",
        "content": [ "ccm.instance", "https://ccmjs.github.io/akless-components/cloze/versions/ccm.cloze-4.1.0.js", {
          "key": [ "ccm.get", { "store": "w&s_cloze", "url": "https://ccm2.inf.h-brs.de" }, "1531471015039X27400901492652463" ],
          "data": {
            "store": [ "ccm.store", { "store": "be2_ws18_cloze_results", "url": "https://ccm2.inf.h-brs.de", "method": "POST" } ],
            "key": "elements_of_report",
            "user": true
          },
          "onfinish": {
            "login": true,
            "store": {
              "settings": {
                "url": "https://ccm2.inf.h-brs.de",
                "method": "POST",
                "store": "be2_ws18_cloze_results"
              },
              "key": "elements_of_report",
              "user": true,
              "permissions": {
                "creator": "teacher",
                "realm": "guest",
                "group": [ "%user%" ],
                "access": {
                  "get": "group",
                  "set": "creator",
                  "del": "creator"
                }
              }
            },
            "alert": "Saved for your student analytics!",
            "restart": true
          }
        } ]
      },
      {
        "title": "<span class=\"fa fa-pencil-square-o\"></span> Key Words and Phrases",
        "content": [ "ccm.instance", "https://ccmjs.github.io/akless-components/cloze/versions/ccm.cloze-4.1.0.js", {
          "key": [ "ccm.get", { "store": "w&s_cloze", "url": "https://ccm2.inf.h-brs.de" }, "1531472277201X06353161050037825" ],
          "data": {
            "store": [ "ccm.store", { "store": "be2_ws18_cloze_results", "url": "https://ccm2.inf.h-brs.de", "method": "POST" } ],
            "key": "keywords_and_phrases",
            "user": true
          },
          "onfinish": {
            "login": true,
            "store": {
              "settings": {
                "url": "https://ccm2.inf.h-brs.de",
                "method": "POST",
                "store": "be2_ws18_cloze_results"
              },
              "key": "keywords_and_phrases",
              "user": true,
              "permissions": {
                "creator": "teacher",
                "realm": "guest",
                "group": [ "%user%" ],
                "access": {
                  "get": "group",
                  "set": "creator",
                  "del": "creator"
                }
              }
            },
            "alert": "Saved for your student analytics!",
            "restart": true
          }
        } ]
      },
      {
        "title": "<span class=\"fa fa-pencil-square-o\"></span> Synonyms 1",
        "content": [ "ccm.instance", "https://ccmjs.github.io/akless-components/cloze/versions/ccm.cloze-4.1.0.js", {
          "key": [ "ccm.get", { "store": "w&s_cloze", "url": "https://ccm2.inf.h-brs.de" }, "1531473258556X7402482042781462" ],
          "data": {
            "store": [ "ccm.store", { "store": "be2_ws18_cloze_results", "url": "https://ccm2.inf.h-brs.de", "method": "POST" } ],
            "key": "synonyms_1",
            "user": true
          },
          "onfinish": {
            "login": true,
            "store": {
              "settings": {
                "url": "https://ccm2.inf.h-brs.de",
                "method": "POST",
                "store": "be2_ws18_cloze_results"
              },
              "key": "synonyms_1",
              "user": true,
              "permissions": {
                "creator": "teacher",
                "realm": "guest",
                "group": [ "%user%" ],
                "access": {
                  "get": "group",
                  "set": "creator",
                  "del": "creator"
                }
              }
            },
            "alert": "Saved for your student analytics!",
            "restart": true
          }
        } ]
      },
      {
        "title": "<span class=\"fa fa-pencil-square-o\"></span> Synonyms 2",
        "content": [ "ccm.instance", "https://ccmjs.github.io/akless-components/cloze/versions/ccm.cloze-4.1.0.js", {
          "key": [ "ccm.get", { "store": "w&s_cloze", "url": "https://ccm2.inf.h-brs.de" }, "1531473763591X5399771561478452" ],
          "data": {
            "store": [ "ccm.store", { "store": "be2_ws18_cloze_results", "url": "https://ccm2.inf.h-brs.de", "method": "POST" } ],
            "key": "synonyms_2",
            "user": true
          },
          "onfinish": {
            "login": true,
            "store": {
              "settings": {
                "url": "https://ccm2.inf.h-brs.de",
                "method": "POST",
                "store": "be2_ws18_cloze_results"
              },
              "key": "synonyms_2",
              "user": true,
              "permissions": {
                "creator": "teacher",
                "realm": "guest",
                "group": [ "%user%" ],
                "access": {
                  "get": "group",
                  "set": "creator",
                  "del": "creator"
                }
              }
            },
            "alert": "Saved for your student analytics!",
            "restart": true
          }
        } ]
      },
      {
        "title": "<span class=\"fa fa-pencil-square-o\"></span> Word Formations",
        "content": [ "ccm.instance", "https://ccmjs.github.io/akless-components/cloze/versions/ccm.cloze-4.1.0.js", {
          "key": [ "ccm.get", { "store": "w&s_cloze", "url": "https://ccm2.inf.h-brs.de" }, "1531474250227X9103298982633563" ],
          "data": {
            "store": [ "ccm.store", { "store": "be2_ws18_cloze_results", "url": "https://ccm2.inf.h-brs.de", "method": "POST" } ],
            "key": "word_formations",
            "user": true
          },
          "onfinish": {
            "login": true,
            "store": {
              "settings": {
                "url": "https://ccm2.inf.h-brs.de",
                "method": "POST",
                "store": "be2_ws18_cloze_results"
              },
              "key": "word_formations",
              "user": true,
              "permissions": {
                "creator": "teacher",
                "realm": "guest",
                "group": [ "%user%" ],
                "access": {
                  "get": "group",
                  "set": "creator",
                  "del": "creator"
                }
              }
            },
            "alert": "Saved for your student analytics!",
            "restart": true
          }
        } ]
      },
      {
        "title": "<span class=\"fa fa-pencil-square-o\"></span> Harvard Style Guide",
        "content": [ "ccm.instance", "https://ccmjs.github.io/akless-components/cloze/versions/ccm.cloze-4.1.0.js", {
          "key": [ "ccm.get", { "store": "w&s_cloze", "url": "https://ccm2.inf.h-brs.de" }, "1531993681764X7543255385841261" ],
          "data": {
            "store": [ "ccm.store", { "store": "be2_ws18_cloze_results", "url": "https://ccm2.inf.h-brs.de", "method": "POST" } ],
            "key": "harvard_style_guide",
            "user": true
          },
          "onfinish": {
            "login": true,
            "store": {
              "settings": {
                "url": "https://ccm2.inf.h-brs.de",
                "method": "POST",
                "store": "be2_ws18_cloze_results"
              },
              "key": "harvard_style_guide",
              "user": true,
              "permissions": {
                "creator": "teacher",
                "realm": "guest",
                "group": [ "%user%" ],
                "access": {
                  "get": "group",
                  "set": "creator",
                  "del": "creator"
                }
              }
            },
            "alert": "Saved for your student analytics!",
            "restart": true
          }
        } ]
      },
      {
        "title": "<span class=\"fa fa-pencil-square-o\"></span> Proofreading and Editing",
        "content": [ "ccm.instance", "https://ccmjs.github.io/akless-components/cloze/versions/ccm.cloze-4.1.0.js", {
          "key": [ "ccm.get", { "store": "w&s_cloze", "url": "https://ccm2.inf.h-brs.de" }, "1531994295903X8478028230378629" ],
          "data": {
            "store": [ "ccm.store", { "store": "be2_ws18_cloze_results", "url": "https://ccm2.inf.h-brs.de", "method": "POST" } ],
            "key": "proofreading_and_editing",
            "user": true
          },
          "onfinish": {
            "login": true,
            "store": {
              "settings": {
                "url": "https://ccm2.inf.h-brs.de",
                "method": "POST",
                "store": "be2_ws18_cloze_results"
              },
              "key": "proofreading_and_editing",
              "user": true,
              "permissions": {
                "creator": "teacher",
                "realm": "guest",
                "group": [ "%user%" ],
                "access": {
                  "get": "group",
                  "set": "creator",
                  "del": "creator"
                }
              }
            },
            "alert": "Saved for your student analytics!",
            "restart": true
          }
        } ]
      },
     {
       "title": "<span class=\"fa fa-pencil-square-o\"></span> Proofreading (Teil 1)",
       "content": [ "ccm.instance", "https://ccmjs.github.io/akless-components/cloze/versions/ccm.cloze-4.1.0.js", {
         "key": [ "ccm.get", { "store": "w&s_cloze", "url": "https://ccm2.inf.h-brs.de" }, "1531996286677X7734645357100738" ],
         "data": {
           "store": [ "ccm.store", { "store": "be2_ws18_cloze_results", "url": "https://ccm2.inf.h-brs.de", "method": "POST" } ],
           "key": "proofreading_1",
           "user": true
         },
         "onfinish": {
           "login": true,
           "store": {
             "settings": {
               "url": "https://ccm2.inf.h-brs.de",
               "method": "POST",
               "store": "be2_ws18_cloze_results"
             },
             "key": "proofreading_1",
             "user": true,
             "permissions": {
               "creator": "teacher",
               "realm": "guest",
               "group": [ "%user%" ],
               "access": {
                 "get": "group",
                 "set": "creator",
                 "del": "creator"
               }
             }
           },
           "alert": "Saved for your student analytics!",
           "restart": true
         }
       } ]
      },
      {
        "title": "<span class=\"fa fa-pencil-square-o\"></span> Proofreading (Teil 2)",
        "content": [ "ccm.instance", "https://ccmjs.github.io/akless-components/cloze/versions/ccm.cloze-4.1.0.js", {
          "key": [ "ccm.get", { "store": "w&s_cloze", "url": "https://ccm2.inf.h-brs.de" }, "1531998101907X3907868591412964" ],
          "data": {
            "store": [ "ccm.store", { "store": "be2_ws18_cloze_results", "url": "https://ccm2.inf.h-brs.de", "method": "POST" } ],
            "key": "proofreading_2",
            "user": true
          },
          "onfinish": {
            "login": true,
            "store": {
              "settings": {
                "url": "https://ccm2.inf.h-brs.de",
                "method": "POST",
                "store": "be2_ws18_cloze_results"
              },
              "key": "proofreading_2",
              "user": true,
              "permissions": {
                "creator": "teacher",
                "realm": "guest",
                "group": [ "%user%" ],
                "access": {
                  "get": "group",
                  "set": "creator",
                  "del": "creator"
                }
              }
            },
            "alert": "Saved for your student analytics!",
            "restart": true
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
          "key": [ "ccm.get", { "store": "w&s_cloze", "url": "https://ccm2.inf.h-brs.de" }, "1531999174809X1458215719642837" ],
          "data": {
            "store": [ "ccm.store", { "store": "be2_ws18_cloze_results", "url": "https://ccm2.inf.h-brs.de", "method": "POST" } ],
            "key": "abbreviated_business_terms",
            "user": true
          },
          "onfinish": {
            "login": true,
            "store": {
              "settings": {
                "url": "https://ccm2.inf.h-brs.de",
                "method": "POST",
                "store": "be2_ws18_cloze_results"
              },
              "key": "abbreviated_business_terms",
              "user": true,
              "permissions": {
                "creator": "teacher",
                "realm": "guest",
                "group": [ "%user%" ],
                "access": {
                  "get": "group",
                  "set": "creator",
                  "del": "creator"
                }
              }
            },
            "alert": "Saved for your student analytics!",
            "restart": true
          }
        } ]
      },
      {
        "title": "<span class=\"fa fa-pencil-square-o\"></span> Review Business Terms",
        "content": [ "ccm.instance", "https://ccmjs.github.io/akless-components/cloze/versions/ccm.cloze-4.1.0.js", {
          "key": [ "ccm.get", { "store": "w&s_cloze", "url": "https://ccm2.inf.h-brs.de" }, "1532000417081X3524240194379842" ],
          "data": {
            "store": [ "ccm.store", { "store": "be2_ws18_cloze_results", "url": "https://ccm2.inf.h-brs.de", "method": "POST" } ],
            "key": "review_business_terms",
            "user": true
          },
          "onfinish": {
            "login": true,
            "store": {
              "settings": {
                "url": "https://ccm2.inf.h-brs.de",
                "method": "POST",
                "store": "be2_ws18_cloze_results"
              },
              "key": "review_business_terms",
              "user": true,
              "permissions": {
                "creator": "teacher",
                "realm": "guest",
                "group": [ "%user%" ],
                "access": {
                  "get": "group",
                  "set": "creator",
                  "del": "creator"
                }
              }
            },
            "alert": "Saved for your student analytics!",
            "restart": true
          }
        } ]
      },
      {
        "title": "<span class=\"fa fa-pencil-square-o\"></span> Differentiating Adverbs and Adjectives",
        "content": [ "ccm.instance", "https://ccmjs.github.io/akless-components/cloze/versions/ccm.cloze-4.1.0.js", {
          "key": [ "ccm.get", { "store": "w&s_cloze", "url": "https://ccm2.inf.h-brs.de" }, "1532002466475X8703464196203523" ],
          "data": {
            "store": [ "ccm.store", { "store": "be2_ws18_cloze_results", "url": "https://ccm2.inf.h-brs.de", "method": "POST" } ],
            "key": "differentiating_adverbs_and_adjectives",
            "user": true
          },
          "onfinish": {
            "login": true,
            "store": {
              "settings": {
                "url": "https://ccm2.inf.h-brs.de",
                "method": "POST",
                "store": "be2_ws18_cloze_results"
              },
              "key": "differentiating_adverbs_and_adjectives",
              "user": true,
              "permissions": {
                "creator": "teacher",
                "realm": "guest",
                "group": [ "%user%" ],
                "access": {
                  "get": "group",
                  "set": "creator",
                  "del": "creator"
                }
              }
            },
            "alert": "Saved for your student analytics!",
            "restart": true
          }
        } ]
      }
    ]
  }*/

};