export default {
  title: "Thumbnail",
  name: "thumb",
  type: "image",
  description: "For display on Project List | JPEG / PNG / WEBP",
  validation: (Rule) => Rule.required(),
  fields: [
    {
      title: "Edit Alt Text",
      name: "name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
};
