export default {
  name: "project_list",
  title: "Project List",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "For display on Project List",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description:
        "Slug is generated from Name, Lower Characters (a-z), Numericals (0-9), dash (-) and must not start with a /, Minimum 3 Characters, eg: 'project-title'",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) =>
        Rule.custom((slug) => {
          const regex = /^[a-z0-9]{3,}(?:-[a-z0-9]+)*$/;
          if (slug.current.match(regex) !== null) {
            return true;
          } else {
            return "Not a valid slug";
          }
        }),
    },
    {
      name: "title",
      title: "Title",
      type: "blockContent",
      description: "For display on Project Page",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "SEO",
      name: "seo",
      type: "seo",
    },
    {
      title: "Thumbnail",
      name: "thumb",
      type: "thumb",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description_1",
      title: "Description 1",
      type: "blockContent",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description_2",
      title: "Description 2",
      type: "blockContent",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description_3",
      title: "Description 3",
      type: "blockContent",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Image Gallery",
      name: "images",
      type: "array",
      description: "JPEG / PNG",
      of: [
        {
          type: "img",
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description_4",
      title: "Description 4",
      type: "blockContent",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      hidden: true,
    },
  ],

  preview: {
    select: {
      title: "name",
      media: "thumb",
    },
  },
};
