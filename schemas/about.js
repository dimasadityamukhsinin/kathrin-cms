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
      description: "Search Engine Optimization allows to improve the ranking in search results.",
      options: {
        collapsible: true,
      },
      fields: [
        {
          name: 'seo_description',
          type: 'string',
          title: 'Description',
          description: "Enter up to 400 characters to describe the Info Page. This description is what will be displayed on search engines or when this page is being shared (e.g. Google or WhatsApp)."
        },
        {
          name: 'seo_keywords',
          type: 'string',
          title: 'Keywords',
          description: "Enter some keywords to describe the Info Page (separated by commas)."
        },
        {
          name: 'seo_image',
          title: 'Image',
          description: '800 x 600 | PNG / JPEG / WEBP | max 100kb. This image is what will be displayed on search engines or when this page is being shared (e.g. Google or WhatsApp).',
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
      description: 'Image on top of the Info Page  I  JPEG / PNG / WEBP  I  Max Width 1920px',
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
      title: 'Info Heading',
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
      description: "The content below will be displayed under Info Heading in the Info Page.",
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Selected Clients',
      name: 'selected_clients',
      type: 'array',
      description: 'JPEG / PNG / WEBP  I  Max Width 250 px',
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
      title: 'Linked Content List',
      type: 'array',
      description: "Contents under the Info page that are linked to another URL.",
      of: [
        {
          name: 'link',
          title: 'Link',
          type: 'object',
          fields: [
            {
              name: 'title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              title: 'Link',
              name: 'link',
              type: 'array',
              validation: (Rule) => Rule.required(),
              of: [
                {
                  name: 'content',
                  type: 'object',
                  validation: (Rule) => Rule.required(),
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
      description: "Customize the text color of the Info Page. Ensure the text color and background color has enough contrast for legibility."
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
