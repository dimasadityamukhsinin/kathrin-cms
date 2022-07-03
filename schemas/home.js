export default {
    name: 'home',
    title: 'Home',
    type: 'document',
    fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'blockContent',
          validation: Rule => Rule.required()
        },
        {
          title: 'Set Text Color',
          name: 'textColor',
          type: 'color',
        },
    ],
    preview: {
      prepare() {
        return {
          title: "Home"
        }
      }
    },
}
  