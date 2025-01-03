import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'



export const client = createClient({
  projectId: 'n7vog6yc',
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}