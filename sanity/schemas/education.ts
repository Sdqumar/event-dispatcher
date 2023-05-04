import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    defineField({
      name: 'school',
      title: 'School',
      type: 'string',
    }),
    defineField({
      name: 'degree',
      title: 'Degree',
      type: 'string',
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'date',

      options: {
        dateFormat: 'YYYY',
      },
    }),
  ],
});
