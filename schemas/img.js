export default {
    name: "img",
    type: "object",
    fields: [
      {
        title: "Image",
        name: "image",
        type: "image",
        validation: (Rule) => Rule.required(),
      },
      {
        title: "Name",
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
}