module.exports = ({ env }) => ({
  // ...
  upload: {
    provider: 'cloudinary',
    providerOptions: {
      cloud_name: env('www-armandozabala-com'),
      api_key: env('472993854717965'),
      api_secret: env('cMIkmdenzUScHh64BAtsSjzcrMg'),
    },
    actionOptions: {
      upload: {},
      delete: {},
    },
  },
  // ...
});
