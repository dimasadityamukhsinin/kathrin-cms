export default {
  title: 'About - Link List',
  name: 'linklist',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Link',
      name: 'content',
      type: 'array',
      of: [
        {
          name: 'content',
          type: 'object',
          fields: [
            {
              title: 'Project Title',
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
      ],
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      hidden: true,
    }
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}
