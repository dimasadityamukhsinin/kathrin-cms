export default {
    name: 'general',
    title: 'General',
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
          title: 'SEO',
          name: 'seo',
          type: 'seo',
        },
    ],
    preview: {
      prepare() {
        return {
          title: "General"
        }
      }
    }
  }
    