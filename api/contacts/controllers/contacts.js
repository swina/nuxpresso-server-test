'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async create(ctx){
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
        await strapi.services.contacts.create( ctx.request.body )
        return ctx
    }
};
