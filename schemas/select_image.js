export default {
  name: "select_image",
  type: "object",
  fields: [
    {
      title: "Image",
      name: "image",
      type: "image",
    },
    {
      title: "Edit Alt Text",
      name: "name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
    prepare(selection) {
      const { title, media } = selection;
      return {
        media: media,
        title: `${title}`,
      };
    },
  },
};
