import React from 'react'
import { FiExternalLink } from 'react-icons/fi'

const normalRender = (props) => <h2>{props.children}</h2>

const linkRender = (props) => (
  <span>
    {props.children} <FiExternalLink />
  </span>
)

export default {
  name: 'about',
  title: 'Info',
  type: 'document',
  fields: [
    {
      title: 'SEO',
      name: 'seo',
      type: 'object',
      options: {
        collapsible: true,
      },
      fields: [
        {
          name: 'seo_description',
          type: 'string',
          title: 'Description',
        },
        {
          name: 'seo_keywords',
          type: 'string',
          title: 'Keywords',
        },
        {
          name: 'seo_image',
          title: 'Image',
          description: '800 x 600 | PNG / JPEG / WEBP | max 100kb',
          type: 'image',
          fields: [
            {
              title: 'Edit Alt Text',
              name: 'name',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      name: 'image',
      title: 'Image',
      description: 'For display on Info Page | JPEG / PNG / WEBP',
      type: 'image',
      fields: [
        {
          title: 'Edit Alt Text',
          name: 'name',
          type: 'string',
        },
      ],
    },
    {
      name: 'title',
      title: 'Title',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          marks: {
            decorators: [
              { title: 'Emphasis', value: 'em' },
              { title: 'Strike', value: 'strike-through' },
              { title: 'Underline', value: 'underline' },
            ],
            annotations: [
            ],
          },
          styles: [
            {
              title: 'Normal',
              value: 'normal',
              blockEditor: {
                render: normalRender,
              },
            },
          ],
          lists: [],
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Info Description',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Selected Clients',
      name: 'selected_clients',
      type: 'array',
      description: 'JPEG / PNG / WEBP',
      of: [
        {
          name: 'select_image',
          type: 'object',
          fields: [
            {
              title: 'Image',
              name: 'image',
              type: 'image',
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
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'linklist',
      title: 'Link List',
      type: 'array',
      of: [
        {
          name: 'link',
          title: 'Link',
          type: 'object',
          fields: [
            {
              name: 'title',
              type: 'string',
            },
            {
              title: 'Link',
              name: 'link',
              type: 'array',
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
                      validation: (Rule) =>
                        Rule.uri({
                          scheme: ['http', 'https', 'mailto', 'tel'],
                        }),
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'footer',
      title: 'Footer',
      type: 'string',
      validation: (Rule) => Rule.required(),
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
        title: 'Info',
      }
    },
  },
}
