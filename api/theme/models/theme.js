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

const fields = [ 'header_bg' , 'header_fg' , 'footer_bg' , 'footer_fg' , 'primary_fg' , 'main_bg' , 'link_fg' , 'menu_fg' , 'heading_fg' , 'buttons_fg' , 'buttons_bg' , ]

function getColor ( color , tone ){
    return color != 'white' && color != 'black' && color != 'transparent' ?
        color + '-' + density[tone] : color
}

module.exports = {
    lifecycles : {
        async beforeCreate(data){

            fields.forEach ( field => {
                if ( data[field] ){
                    let pref = field.indexOf('bg') > -1 ? 'bg-' : 'text-'
                    data[field].tw_color = pref + getColor ( data[field].color , data[field].density ) 
                }
            })
            if ( data.GPDR && data.GPDR.background ){
                data.GPDR.background.tw_color = 'bg-' + getColor ( data.GPDR.background.color , data.GPDR.background.density )
            }
            if ( data.GPDR && data.GPDR.foreground ){
                data.GPDR.foreground.tw_color = 'text-' + getColor ( data.GPDR.foreground.color , data.GPDR.foreground.density )
            }
            return data
        },
        async beforeUpdate(params,data){

            fields.forEach ( field => {
                if ( data[field] ){
                    let pref = field.indexOf('bg') > -1 ? 'bg-' : 'text-'
                    data[field].tw_color = pref + getColor ( data[field].color , data[field].density ) 
                }
            })
            if ( data.GPDR && data.GPDR.background ){
                data.GPDR.background.tw_color = 'bg-' + getColor ( data.GPDR.background.color , data.GPDR.background.density )
            }
            if ( data.GPDR && data.GPDR.foreground ){
                data.GPDR.foreground.tw_color = 'text-' + getColor ( data.GPDR.foreground.color , data.GPDR.foreground.density )
            }
            return data
        }
    }
};
