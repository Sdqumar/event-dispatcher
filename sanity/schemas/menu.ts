import { FiExternalLink, FiLink2 } from 'react-icons/fi';
import { defineArrayMember, defineField, defineType } from 'sanity';

export default defineType({
  name: 'menu',
  title: 'Menus',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      description: 'Internal use only',
      type: 'string',
    }),
    defineField({
      name: 'submenus',
      title: 'Submenus',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'submenu',
          title: 'Submenu',
          type: 'object',
          fields: [
            defineField({
              name: 'heading',
              title: 'Heading',
              description: 'The heading for the submenu',
              type: 'string',
            }),
            defineField({
              name: 'items',
              title: 'Items',
              type: 'array',
              of: [
                defineArrayMember({
                  title: 'External link',
                  name: 'link',
                  type: 'object',
                  icon: FiExternalLink,
                  fields: [
                    {
                      title: 'Label',
                      description: 'Nav link displayed as',
                      name: 'label',
                      type: 'string',
                      validation: (Rule) => Rule.required(),
                    },
                    {
                      title: 'URL',
                      name: 'href',
                      type: 'url',
                      validation: (Rule) => Rule.required(),
                    },
                    {
                      title: 'Open in new tab',
                      name: 'blank',
                      type: 'boolean',
                    },
                  ],
                  preview: {
                    select: {
                      label: 'label',
                      href: 'href',
                      newTab: 'blank',
                    },
                    prepare(selection) {
                      const { label, href } = selection;
                      return {
                        title: label,
                        subtitle: `CUSTOM LINK - ${href}`,
                        icon: FiExternalLink,
                      };
                    },
                  },
                }),
                defineArrayMember({
                  name: 'internalLink',
                  type: 'object',
                  title: 'Internal link',
                  icon: FiLink2,
                  fields: [
                    {
                      title: 'Label',
                      description: 'Nav link displayed as',
                      name: 'label',
                      type: 'string',
                      validation: (Rule) => Rule.required(),
                    },
                    {
                      name: 'referencePage',
                      type: 'reference',
                      title: 'Page',
                      to: [
                        { type: 'post' },
                        { type: 'location' },
                        { type: 'grouppage' },
                      ],
                      options: {
                        disableNew: true,
                      },
                      validation: (Rule) => Rule.required(),
                    },
                  ],
                  preview: {
                    select: {
                      label: 'label',
                      title: 'referencePage.title',
                      pageType: 'referencePage._type',
                      publishedAt: 'referencePage.publishedAt',
                      image: 'referencePage.featuredImage',
                    },
                    prepare(selection) {
                      const { label, title, pageType, image } = selection;
                      return {
                        title: label,
                        subtitle: `${pageType.toUpperCase()} - ${
                          title ? title : 'Untitled'
                        }`,
                        media: image ? image : FiLink2,
                      };
                    },
                  },
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  ],
});
