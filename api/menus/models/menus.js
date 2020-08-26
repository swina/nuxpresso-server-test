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

const fields = [ 'background' , 'foreground' , 'menu_background' , 'menu_foreground' ]

function getColor ( color , tone ){
    return color != 'white' && color != 'black' && color != 'transparent' ?
        color + '-' + tone : color // + density[getTone(tone)] : color
}

function getTone ( tone ){
    return tone ? tone : 'normal'
}

module.exports = {
    lifecycles : {
        async beforeCreate(data){

            fields.forEach ( field => {
                if ( data[field] ){
                    let pref = field.indexOf('background') > -1 ? 'bg-' : 'text-'
                    data[field].tw_color = pref + getColor ( data[field].color , data[field].density ) 
                }
            })
        },
        async beforeUpdate(params,data){

            fields.forEach ( field => {
                if ( data[field] ){
                    let pref = field.indexOf('background') > -1 ? 'bg-' : 'text-'
                    data[field].tw_color = pref + getColor ( data[field].color , data[field].density ) 
                }
            })
        }

    }
};
