import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

if (!process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN) {
  throw new Error("NEXT_PUBLIC_STORYBLOK_API_TOKEN is not defined");
}

console.log("Initializing Storyblok with token:", process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN);

export const storyblokApi = storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: "eu",
    version: "draft"
  }
})();