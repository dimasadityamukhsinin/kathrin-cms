export default {
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
      {
        name: 'top',
        title: 'Top',
        type: 'blockContent',
        validation: Rule => Rule.required()
      },
      {
        name: 'footer',
        title: 'Footer',
        type: 'blockContent',
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
