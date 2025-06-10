module.exports = ({ env }) => ({
  'users-permissions': {
    jwtSecret: env('JWT_SECRET', 'your-generated-secret-here'),
  },
});