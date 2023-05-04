import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'grouppage',
  title: 'Group Page',
  type: 'document',
  groups: [
    {
      name: 'seo',
      title: 'SEO & Social',
    },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'titleSchedule',
      title: 'Title Schedule',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      type: 'boolean',
      name: 'enable',
      title: 'Enable',
    }),
    defineField({
      name: 'form',
      title: 'Contact form',
      type: 'reference',
      to: [{ type: 'formbuilder' }],
    }),

    defineField({
      name: 'schedule',
      title: 'Schedule',
      type: 'string',
    }),

    defineField({
      name: 'location',
      title: 'Location',
      type: 'reference',
      to: [{ type: 'location' }],
    }),
    defineField({
      name: 'facilitator',
      title: 'Facilitator',
      type: 'reference',
      to: [{ type: 'provider' }],
    }),
    defineField({
      name: 'insurance',
      title: 'Insurance (optional)',
      type: 'string',
    }),
    defineField({
      name: 'contact',
      title: 'Contact',
      type: 'string',
    }),
    defineField({
      name: 'flyer',
      title: 'Flyer pdf file',
      type: 'file',
      options: {
        accept: 'application/pdf',
      },
    }),

    defineField({
      name: 'seo',
      title: 'SEO & Social',
      type: 'seo',
      group: 'seo',
    }),
  ],
});
