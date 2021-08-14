export default {
  name: 'project_list',
  title: 'Project List',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Project Title',
      type: 'string',
      description: 'For display on Project List',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description:
        "Slug is generated from Name, Lower Characters (a-z), Numericals (0-9), dash (-) and must not start with a /, Minimum 3 Characters, eg: 'project-title'",
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) =>
        Rule.custom((slug) => {
          const regex = /^[a-z0-9]{3,}(?:-[a-z0-9]+)*$/
          if (slug.current.match(regex) !== null) {
            return true
          } else {
            return 'Not a valid slug'
          }
        }),
    },
    {
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
    },
    {
      title: 'SEO',
      name: 'seo',
      type: 'object',
      options: {
        collapsible: true,
      },
      fields: [
        {
          name: 'seo_description',
          type: 'string',
          title: 'Description',
        },
        {
          name: 'seo_keywords',
          type: 'string',
          title: 'Keywords',
        },
        {
          name: "seo_image",
          title: "Image",
          description: "800 x 600 | PNG / JPEG / WEBP | max 100kb",
          type: "image",
          fields: [
            {
              title: "Edit Alt Text",
              name: "name",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: 'title',
      title: 'Project Description',
      type: 'blockContent',
      description: 'For display on Project Page',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Content',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      hidden: true,
    },
  ],

  preview: {
    select: {
      title: 'name',
      media: 'thumb',
    },
  },
}
