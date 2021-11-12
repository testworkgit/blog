const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  //apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
  useCdn: process.NODE_ENV === 'production' // `false` if you want to ensure fresh data
});
export default client;