module.exports = ({ env }) => ({
  host: env('HOST', process.env.HOST || '0.0.0.0'),
  port: env.int('PORT', process.env.PORT || 3000),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
  },
});
