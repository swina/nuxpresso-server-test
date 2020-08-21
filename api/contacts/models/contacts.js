'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
    /*
    lifecycles : {
        async beforeCreate(ctx){
            let email = {
                to: process.env.SITE_EMAIL,
                from: ctx.request.body.email,
                subject: 'Contact Us',
                text: `
                Name:  ${ctx.request.body.firstname} ${ctx.request.body.lastname} 
                Message: ${ctx.request.body.message}`
            }
            if ( ctx.request.body.subscriber ){
                email = {
                    to: process.env.SITE_EMAIL,
                    from: ctx.request.body.email,
                    subject: 'Subscription',
                    text: `Subscription from ${ctx.request.body.email}`
                }
            }
            await strapi.plugins['email'].services.email.send(
                email
            );
            //await strapi.services.contact.create( ctx.request.body )
            return ctx
        }
    }
    */
};
