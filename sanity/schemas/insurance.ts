import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'insurance',
  title: 'Insurance',
  type: 'document',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'label',
        maxLength: 96,
      },
    }),
  ],
});
