export default {
  title: "Selected Clients",
  name: "selected_clients",
  type: "array",
  description: "JPEG / PNG / WEBP",
  of: [
    {
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
    },
  ],
  validation: (Rule) => Rule.required(),
};
