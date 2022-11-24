export default {
    name: 'settings',
    title: 'Settings',
    type: 'document',
    initialValue: () => ({
      webTitle: "Kathrin Honesta"
    }),
    fields: [
        {
          name: 'webTitle',
          title: 'Website Title',
          type: 'string',
          validation: Rule => Rule.required()
        },
        {
          title: "Default SEO",
          name: "seo",
          type: "object",
          description: "Search Engine Optimization allows to improve the ranking in search results.",
          options: {
            collapsible: true
          },
          fields: [
            {
              name: "seo_description",
              type: "string",
              title: "Description",
              description: "Enter up to 400 characters to describe the Info Page. This description is what will be displayed on search engines or when this page is being shared (e.g. Google or WhatsApp).",
              validation: Rule => Rule.required()
            },
            {
              name: "seo_keywords",
              type: "string",
              title: "Keywords",
              description: "Enter some keywords to describe the Info Page (separated by commas).",
              validation: Rule => Rule.required()
            },
            {
              name: "seo_image",
              title: "Image",
              description: "800 x 600 | PNG / JPEG / WEBP | max 100kb. This image is what will be displayed on search engines or when this page is being shared (e.g. Google or WhatsApp).",
              type: "image",
              validation: Rule => Rule.required(),
              fields: [
                {
                  title: "Edit Alt Text",
                  name: "name",
                  type: "string",
                  validation: Rule => Rule.required()
                },
              ],
            },
          ],
        },
    ],
    preview: {
      prepare() {
        return {
          title: "Settings"
        }
      }
    }
  }
    