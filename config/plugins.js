module.exports = ({ env }) => ({
    // ...
    upload: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env('CLOUDINARY_CLOUD_NAME'),
        api_key: env('CLOUDINARY_API_KEY'),
        api_secret: env('CLOUDINARY_API_SECRET')
      }
    },

    email: {
      provider: 'mailgun',
      providerOptions: {
        apiKey: env('MAILGUN_API_KEY'),
        domain: env('MAILGUN_DOMAIN')
      },
      settings: {
        defaultFrom: env('MAILGUN_FROM'),
        defaultReplyTo: env('MAILGUN_REPLYTO')
      },
    },

    graphql: {
      endpoint: '/graphql',
      tracing: false,
      shadowCRUD: true,
      playgroundAlways: true,
      depthLimit: 7,
      amountLimit: 100,
    },
    // ...
  });