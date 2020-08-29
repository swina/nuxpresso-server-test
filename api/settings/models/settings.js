'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

const density = {
    extralight : 100 ,
    verylight : 200 ,
    mediumlight: 300 ,
    light: 400 ,
    normal: 500 ,
    mediumdark: 600 ,
    dark: 700 ,
    verydark: 800 ,
    extradark: 900 
}

const fields = [ 'header_bg' , 'header_fg' , 'footer_bg' , 'footer_fg' , 'primary_fg' , 'main_bg' , 'link_fg' , 'menu_fg' , 'heading_fg']

function getColor ( color , tone ){
    return color != 'white' && color != 'black' && color != 'transparent' ?
        color + '-' + density[getTone(tone)] : color
}

function getTone ( tone ){
    return tone ? tone : 'normal'
}

module.exports = {
    lifecycles : {
        async beforeCreate(data){

            fields.forEach ( field => {
                if ( data.darkmode ){
                    if ( data.darkmode_settings[field] ){
                        let pref = field.indexOf('bg') > -1 ? 'bg-' : 'text-'
                        data.darkmode_settings[field].tw_color = pref + getColor ( data.darkmode_settings[field].color , data.darkmode_settings[field].density )  
                    }
                }
            })
        },
        async beforeUpdate(params,data){

            fields.forEach ( field => {
                if ( data.darkmode && data.darkmode_settings[field] ){
                    let pref = field.indexOf('bg') > -1 ? 'bg-' : 'text-'
                    data.darkmode_settings[field].tw_color = pref + getColor ( data.darkmode_settings[field].color , data.darkmode_settings[field].density ) 
                }
            })
        }
    }
};

