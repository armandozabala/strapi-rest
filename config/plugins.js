module.exports = ({ env }) => ({
  // ...
  upload: {
    provider: 'cloudinary',
    providerOptions: {
      cloud_name: env('CLOUDINARY_NAME','www-armandozabala-com'),
      api_key: env('CLOUDINARY_KEY','472993854717965'),
      api_secret: env('CLOUDINARY_SECRET','cMIkmdenzUScHh64BAtsSjzcrMg'),
    },
  },
  // ...
});
