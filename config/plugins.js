module.exports = ({ env }) => ({
  'users-permissions': {
    jwtSecret: env('JWT_SECRET', 'your-generated-secret-here'),
  },
});


module.exports = ({ env }) => ({
  upload: {
    provider: 'digitalocean',
    providerOptions: {
      space: env('DO_SPACES_BUCKET'), // Your DigitalOcean Space name
      accessKeyId: env('DO_SPACES_KEY'), // Your DigitalOcean Spaces access key
      secretAccessKey: env('DO_SPACES_SECRET'), // Your DigitalOcean Spaces secret key
      endpoint: env('DO_SPACES_ENDPOINT'), // Your DigitalOcean Spaces endpoint
      region: env('DO_SPACES_REGION'), // Your DigitalOcean region
      // Any additional configuration options
      params: {
        ACL: 'public-read', // 👈 important
      },
    },
  },
});