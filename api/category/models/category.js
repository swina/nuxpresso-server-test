'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
    lifecycles : {
        beforeCreate: async ( data ) => {
            data.slug = data.name.toLowerCase()
            .replace(/ /g,'-')
            .replace(/[^\w-]+/g,'') 
        }
    }
};
