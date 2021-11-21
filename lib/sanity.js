const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  //apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
  useCdn: process.NODE_ENV === 'production' // `false` if you want to ensure fresh data
});
export default client;