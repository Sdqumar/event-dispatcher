import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'anchor',
  title: 'Anchor',
  type: 'document',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
    }),
  ],
});
