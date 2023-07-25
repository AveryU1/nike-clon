// import {
//   createImageUrlBuilder,
//   imageUrlBuilder,
//   createCurrentUserHook,
//   createClient,
// } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";


export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_PROJECT || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: "2021-03-25",
  useCdn: true,
};

export const sanityClient = createClient(config);

const builder = imageUrlBuilder(config);

export function urlFor(source) {
  return builder.image(source);
}

// export const urlFor = source => createImageUrlBuilder(config).image(source);
