import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { sanityClient } from '@/sanity/client';

const builder = imageUrlBuilder(sanityClient);

export function urlForImage(source: SanityImageSource){
  return builder.image(source);
}