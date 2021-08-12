export default {
    name: 'about',
    title: 'About',
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
              title: "SEO Image",
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
          title: 'About Description',
          type: 'string',
          validation: Rule => Rule.required()
        },
        {
          title: "Selected Clients",
          name: "selected_clients",
          type: "array",
          description: "JPEG / PNG / WEBP",
          of: [
            {
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
            }
          ],
          validation: (Rule) => Rule.required(),
        },
        {
          name: "linklist",
          title: "Link List",
          type: "array",
          of: [
            {
              name: "link",
              title: "Link",
              type: "object",
              fields: [
                {
                  name:"title",
                  type: "string"
                },
                {
                  title: "Link",
                  name:"link",
                  type: "array",
                  of: [
                    {
                      name: 'content',
                      type: 'object',
                      fields: [
                        {
                          title: 'Name',
                          name: 'name',
                          type: 'string',
                          validation: (Rule) => Rule.required(),
                        },
                        {
                          title: 'Link',
                          name: 'link',
                          type: 'url',
                        },
                      ],
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          name: 'footer',
          title: 'Footer',
          type: 'string',
          validation: Rule => Rule.required()
        },
    ],
    preview: {
      prepare() {
        return {
          title: "About"
        }
      }
    },
}
  