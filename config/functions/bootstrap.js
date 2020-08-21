

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
    /*    
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


        //create a default theme
        const theme = {
            "id": "1",
            "name": "Default",
            "nuxt_layout": "default",
            "header_bg": {
                "color": "blue",
                "density": "verydark",
                "image": null,
                "css": "py-4 lg:py-10 shadow-lg"
            },
            "header_fg": {
                "color": "white",
                "density": "normal",
                "css": null
            },
            "footer_bg": {
                "color": "gray",
                "density": "mediumdark",
                "image": null,
                "css": null
            },
                "footer_fg": {
                "color": "gray",
                "density": "verylight",
                "css": null
            },
            "primary_fg": {
                "color": "gray",
                "density": "mediumdark",
                "css": null
            },
            "main_bg": {
                "color": "gray",
                "density": "verylight",
                "css": null
            },
            "link_fg": {
                "color": "blue",
                "density": "mediumdark",
                "css": null
            },
            "menu_fg": null,
            "header": [
                {
                  "__component": "elements.columns",
                  "id": 1,
                  "css": "justify-between",
                  "column": [
                    {
                      "id": 1,
                      "class": "bg-white py-2 px-4 rounded-xl",
                      "menu": null,
                      "content": 'NUXPRESSO',
                      "widget": null,
                      "paragraph": null,
                      "name": "logo",
                      "link_url" : '/'
                    },
                    {
                      "id": 2,
                      "class": null,
                      "menu": null,
                      "content": null,
                      "widget": null,
                      "paragraph": null,
                      "name": "menu",
                      "image": null,
                      "link_url" : '/'
                    }
                  ]
                }
              ],
           
              "footer": [
                {
                  "__component": "elements.columns",
                  "id": 2,
                  "css": "py-2 lg:py-10 px-2 lg:px-6",
                  "class": null,
                  "menu": null,
                  "content": null,
                  "widget": null,
                  "paragraph": null,
                  "name": null,
                  "column": [
                    {
                      "id": 3,
                      "class": null,
                      "menu": null,
                      "content": "Github",
                      "widget": null,
                      "paragraph": null,
                      "name": "github",
                      "image": null,
                      "link_url" : "https://github.com/swina/nuxpresso"
                    },
                    {
                      "id": 5,
                      "class": null,
                      "menu": null,
                      "content": '#Slack',
                      "widget": null,
                      "paragraph": null,
                      "name": "slack",
                      "image": null,
                      "link_url" : "https://nuxpresso.slack.com"
                    }
                  ]
                }
              ],
        }
        const createTheme = await strapi.query('theme').create(theme)
    }
    */

    
};
