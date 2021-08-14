export default {
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
      {
        title: "SEO",
        name: "seo",
        type: "object",
        options: {
          collapsible: true
        },
        fields: [
          {
            name: "seo_description",
            type: "string",
            title: "Description",
          },
          {
            name: "seo_keywords",
            type: "string",
            title: "Keywords",
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
        name: 'top',
        title: 'Description',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'footer',
        title: 'Footer',
        type: 'string',
        validation: Rule => Rule.required()
      }
  ],
  preview: {
    prepare() {
      return {
        title: "Projects"
      }
    }
  },
}
