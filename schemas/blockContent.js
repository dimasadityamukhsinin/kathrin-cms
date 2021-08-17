/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */

export default {
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
    },
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    {
      name: 'spacer',
      type: 'object',
      title: 'Spacer',
      fields: [
        {
          title: 'Type',
          name: 'title',
          type: 'string',
          readOnly: true,
        },
        {
          title: 'Height',
          name: 'height',
          type: 'number',
        },
      ],
      initialValue: {
        title: 'Spacer',
      },
    },
    {
      title: 'Image',
      name: 'img',
      type: 'object',
      fields: [
        {
          title: 'Image',
          name: 'image',
          type: 'image',
          validation: (Rule) => Rule.required(),
        },
        {
          title: 'Edit Alt Text',
          name: 'name',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
      ],
    },
  ],
}
