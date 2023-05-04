import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'redirects',
  title: 'Redirects',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      name: 'source',
      title: 'Source',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'destination',
      title: 'Destination',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'permanent',
      title: 'Permanent',
      type: 'boolean',
      initialValue: false,
    }),
  ],
});
