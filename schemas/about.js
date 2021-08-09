export default {
    name: 'about',
    title: 'About',
    type: 'document',
    fields: [
        {
          title: 'SEO',
          name: 'seo',
          type: 'seo',
        },
        {
          name: 'title',
          title: 'Title',
          type: 'blockContent',
          validation: Rule => Rule.required()
        },
        {
          title: "Selected Clients",
          name: "selected_clients",
          type: "array",
          description: "JPEG / PNG / WEBP",
          of: [
            {
              type: "select_image"
            }
          ],
          validation: (Rule) => Rule.required(),
        },
        {
          title: 'Press',
          name: 'press',
          type: 'array',
          of: [
            {
              type: 'press',
            },
          ],
          validation: Rule => Rule.required(),
        },
        {
          title: 'Contact',
          name: 'contact',
          type: 'array',
          of: [
            {
              type: 'contact',
            },
          ],
          validation: Rule => Rule.required(),
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
  