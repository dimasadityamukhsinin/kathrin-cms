export default {
  title: "SEO",
  name: "seo",
  type: "object",
  fields: [
    {
      name: "seo_description",
      type: "string",
      title: "SEO Description",
    },
    {
      name: "seo_keywords",
      type: "string",
      title: "SEO Keywords",
    },
    {
      name: "seo_image",
      title: "SEO Image",
      description: "800 x 600 | PNG / JPEG / WEBP | max 100kb",
      type: "seo_image",
    },
  ],
};
