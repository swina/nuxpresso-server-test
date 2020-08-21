'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */
module.exports = {
    lifecycles : {
        beforeCreate: async ( data ) => {
            data.slug = data.title.toLowerCase()
            .replace(/ /g,'-')
            .replace(/[^\w-]+/g,'') 
        }
    }
};
