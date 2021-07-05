export default {
  title: "Thumbnail",
  name: "thumb",
  type: "image",
  description: "For display on Project List | JPEG / PNG / WEBP",
  validation: (Rule) => Rule.required(),
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
};
