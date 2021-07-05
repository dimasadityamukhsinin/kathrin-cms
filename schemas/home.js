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
        }
    ],
    preview: {
      prepare() {
        return {
          title: "Home"
        }
      }
    },
}
  