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

const fields = [ 'background' , 'foreground' ]

function getColor ( color , tone ){
    return color != 'white' && color != 'black' && color != 'transparent' ?
        color + '-' + density[tone] : color
}
module.exports = {
    lifecycles : {
        async beforeCreate(data){

            fields.forEach ( field => {
                if ( data[field] ){
                    let pref = field === 'background' ? 'bg-' : 'text-'
                    data[field].tw_color = pref + getColor ( data[field].color , data[field].density ) 
                }
            })
        },
        async beforeUpdate(params,data){

            fields.forEach ( field => {
                if ( data[field] ){
                    let pref = field === 'background' ? 'bg-' : 'text-'
                    data[field].tw_color = pref + getColor ( data[field].color , data[field].density ) 
                }
            })
        }

    }
};
