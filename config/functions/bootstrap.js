

/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 *
 * See more details here: https://strapi.io/documentation/v3.x/concepts/configurations.html#bootstrap
 */

module.exports = async () => {   
    
    
    const isStartup = await strapi.query('settings').count()
    
    if ( !isStartup ){
        //create 2 basic templates (homepage and default)
        const templateHome = {
            "id": "1",
            "name": "homepage",
            "class": "",
            "fields": [
              
              {
                "name": "title",
                "class": "m-auto text-center mt-8",
                "shortcode": null,
                "textbox": null,
                "widget": null,
                "menu": null
              },
              {
                "name": "content",
                "class": "px-2 md:px-8 lg:px-24 py-2 md:py-4 lg:py-12",
                "shortcode": null,
                "textbox": null,
                "widget": null,
                "menu": null
              }
            ],
            "fields_col_2": [],
            "fields_col_3": []
        }
        

        const templateDefault =  {
            "id": "2",
            "name": "default",
            "class": "p-2 md:p-4 lg:px-20 lg:py-4",
            "fields": [
              {
                "name": "image",
                "class": null,
                "shortcode": null,
                "textbox": null,
                "widget": null,
                "menu": null
              },
              {
                "name": "title",
                "class": null,
                "shortcode": null,
                "textbox": null,
                "widget": null,
                "menu": null
              },
              {
                "name": "date",
                "class": null,
                "shortcode": null,
                "textbox": null,
                "widget": null,
                "menu": null
              },
              {
                "name": "tags",
                "class": null,
                "shortcode": null,
                "textbox": null,
                "widget": null,
                "menu": null
              },
              {
                "name": "categories",
                "class": null,
                "shortcode": null,
                "textbox": null,
                "widget": null,
                "menu": null
              },
              {
                "name": "content",
                "class": null,
                "shortcode": null,
                "textbox": null,
                "widget": null,
                "menu": null
              }
            ],
            "fields_col_2": [],
            "fields_col_3": []
          }

        const createTemplateHome = await strapi.query( 'template' ).create ( templateHome )
        const createTemplateDefault = await strapi.query ( 'template' ).create ( templateDefault )


        //create initial minimal settings
        const setting = {
            "site_name": "nuxpresso" ,
            "site_title": "Just a nuxpresso site",
            "show_title": false,
            "breadcrumb": true,
            "darkmode": false,
            "autoimage": true,
            "authentication": false,
            "articles_limit": 4,
            "articles_loop_mode": "modern",
            "current_theme": {
                "id" : 1,
                "theme" :{
                    "id" : null

                }
            },
            "logo_img": null,
            "email": null,
            "github": null,
            "twitter": null,
            "footer": "nuxpresso - Created with NuxtJS / Strapi / Tailwindcss ",
            "darkmode_settings": null
        }

        const createSetting = await strapi.query('settings').create ( setting )
        
        const themeDefault = {
          "name": "Default",
          "nuxt_layout": "default",
          "page_not_found": "<div class=\"text-white\"  style=\"min-height:8rem;font-size:12rem;\">404</div>\n<div class=\"text-white\">Oooops !\nPage your are looking for is not here !\n</div>",
          "darkmode": null,
          "header_fixed": false,
          "header": [
          {
            "__component": "elements.columns",
            "id": 1,
            "css": "justify-between ",
            "column": [
              {
                "id": 1,
                "class": "text-gray-500 text-center",
                "menu": null,
                "content": "M Y   N E W    S I T E",
                "widget": null,
                "paragraph": null,
                "name": "logo",
                "link_url": "/",
                "video": null,
                "video_size": null,
                "content_element": "h1",
                "image": null 
              }
            ]
          }
        ],
        "footer": [
          {
            "__component": "elements.columns",
            "id": 2,
            "css": "py-2 px-2 lg:py-10",
            "column": [
              {
                "id": 9,
                "class": "w-48 text-xs md:text-sm",
                "menu": null,
                "content": "NUXPRESSO",
                "widget": null,
                "paragraph": "<div class=\"mt-4 text-sm leading-5 text-gray-400 italic\">nuxpresso is an MIT licensed open source and completely free project that integrates NuxtJS, Strapi CMS, TailwindCSS and GraphQL as a starter in order to create stunning static websites</div>",
                "name": "Logo",
                "link_url": null,
                "video": null,
                "video_size": null,
                "content_element": "h4",
                "image": null
              },
              {
                "id": 3,
                "class": "",
                "menu":null,
                "content": "RESOURCES",
                "widget": null,
                "paragraph": null,
                "name": "Resources",
                "link_url": null,
                "video": null,
                "video_size": null,
                "content_element": "h4",
                "image": null
              },
              {
                "id": 4,
                "class": "text-sm",
                "menu": null,
                "content": "COMPANY",
                "paragraph": "Keyfalan Yaylası cad. Bizimtepe evleri no 55 (91) \nDEMİRCİKÖY SARIYER \nİSTANBUL\nTURKEY",
                "name": "address",
                "link_url": null,
                "video": null,
                "video_size": null,
                "content_element": "h4",
                "image": null
              }
            ]
          }
        ],
        "header_bg": {
          "id": 1,
          "color": "gray",
          "density": "verydark",
          "css": "py-4 lg:py-6 shadow-xl border-b-8 border-blue-700",
          "tw_color": "bg-gray-800",
          "image": null
        },
        "header_fg": {
          "id": 1,
          "density": "",
          "color": "white",
          "css": "",
          "tw_color": "text-white"
        },
        "footer_bg": {
          "id": 2,
          "color": "gray",
          "density": "dark",
          "css": null,
          "tw_color": "bg-gray-700",
          "image": null
        },
        "footer_fg": {
          "id": 2,
          "density": "verylight",
          "color": "gray",
          "css": null,
          "tw_color": "text-gray-200"
        },
        "primary_fg": {
          "id": 3,
          "density": "dark",
          "color": "gray",
          "css": null,
          "tw_color": "text-gray-700"
        },
        "main_bg": {
          "id": 8,
          "color": "white",
          "density": "",
          "css": null,
          "tw_color": "bg-white",
          "image": null
        },
        "link_fg": {
          "id": 4,
          "density": "mediumdark",
          "color": "blue",
          "css": null,
          "tw_color": "text-blue-600"
        },
        "menu_fg": null,
        "heading_fg": {
          "id": 28,
          "density": "dark",
          "color": "blue",
          "css": null,
          "tw_color": "text-blue-700"
        },
        "buttons_fg": {
          "id": 6,
          "density": null,
          "color": "white",
          "css": "hover:text-white",
          "tw_color": "text-white"
        },
        "buttons_bg": {
          "id": 4,
          "color": "gray",
          "density": "verydark",
          "css": "hover:bg-blue-700",
          "tw_color": "bg-gray-800",
          "image": null
        },
        "GPDR": null
        }
        const createTheme = await strapi.query('theme').create(themeDefault)
    
  }

};
