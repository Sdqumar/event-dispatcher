import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'specialty',
  title: 'Specialty',
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
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Treatment Area', value: 'treatment-area' },
          { title: 'Modality', value: 'modality' },
          { title: 'Cultural Competency', value: 'cultural-competency' },
        ],
      },
    }),
  ],
});
