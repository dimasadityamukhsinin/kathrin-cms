import React from 'react'
import { FiExternalLink } from 'react-icons/fi'

const linkRender = (props) => (
  <span>
    {props.children} <FiExternalLink />
  </span>
)

export default {
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Strike', value: 'strike-through' },
          { title: 'Underline', value: 'underline' },
        ],
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'Link',
            blockEditor: {
              icon: () => <FiExternalLink />,
              render: linkRender,
            },
            fields: [
              {
                name: 'url',
                type: 'url',
              },
            ],
          },
        ],
      },
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
