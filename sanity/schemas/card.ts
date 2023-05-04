import { BsCardHeading } from 'react-icons/bs';
import { FiChevronDown, FiExternalLink, FiLink2 } from 'react-icons/fi';
import { defineArrayMember, defineField, defineType } from 'sanity';

import Card from '../components/Card';

export default defineType({
  title: 'Card',
  type: 'document',
  name: 'card',
  icon: BsCardHeading,
  fields: [
    {
      title: 'Card Content',
      name: 'body',
      type: 'array',
      of: [
        defineArrayMember({
          title: 'Block',
          type: 'block',
          marks: {
            annotations: [
              {
                name: 'internalLink',
                type: 'object',
                title: 'Internal link',
                icon: FiLink2,
                fields: [
                  {
                    name: 'referencePost',
                    type: 'reference',
                    title: 'Reference Post',
                    to: [
                      { type: 'post' },
                      // other types you may want to link to
                    ],
                    options: {
                      disableNew: true,
                    },
                  },
                ],
              },
              {
                title: 'External link',
                name: 'link',
                type: 'object',
                icon: FiExternalLink,
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url',
                  },
                  {
                    title: 'Open in new tab',
                    name: 'blank',
                    type: 'boolean',
                  },
                ],
              },
              {
                name: 'anchorLink',
                type: 'object',
                title: 'Anchor link',
                icon: FiChevronDown,
                fields: [
                  {
                    name: 'referenceAnchor',
                    type: 'reference',
                    title: 'Link to an existing anchor',
                    to: [{ type: 'anchor' }],
                    options: {
                      disableNew: true,
                    },
                  },
                ],
              },
            ],
          },
        }),
      ],
    },
    defineField({
      name: 'secondary',
      title: 'Secondary?',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      body: 'body',
    },
    prepare(selection): any {
      const { body } = selection;
      return {
        body: body,
      };
    },
  },
  components: {
    preview: Card,
  },
});
