import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'oopytn9a',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
   'skjcwg0pHPwEhDPoUk7Wdz0J0qEzNQXuEMmdg24Wb0nueK3AKwzPpuDhbphXPBoLkufGEuQyRqX2sQzlJhJR17eq9J7FaORl3lWhprsh1iiRe9gLiYiqTjPMUPhWlKFTNgPJuzK5aub1qNO2PXP1qQEFEFWlTYUv1tcq8Izmg7TiJKr37B7h',
  useCdn: false,
})