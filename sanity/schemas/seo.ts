import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'seo',
  title: '',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title for SEO & Social Sharing',
      description:
        'Make it as enticing as possible to convert users in social feeds and Google searches. Ideally petween 15 and 70 characters',
      type: 'string',
    }),

    defineField({
      name: 'description',
      title: 'Short paragraph for SEO & social sharing (meta description)',
      description:
        "Optional but highly encouraged as it'll help you convert more visitors from Google & social Ideally between 70 and 160 characters ",
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Social sharing image',
      description:
        ' Optional but highly encouraged for increasing conversion rates for links to this page shared in social media. ',
      type: 'image',
    }),
  ],
});
