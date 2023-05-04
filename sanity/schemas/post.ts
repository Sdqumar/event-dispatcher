import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'post',
  title: 'Post',
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
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'provider',
      title: 'Author (attribute to provider)',
      description:
        "Will show provider's profile card at bottom of blog post, and also be included on their profile page under recent blog posts",
      type: 'reference',
      to: [{ type: 'provider' }],
      options: {
        disableNew: true,
      },
    }),

    defineField({
      name: 'featuredImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
      name: 'seo',
      title: 'SEO & Social',
      type: 'seo',
      group: 'seo',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      providerFirstName: 'provider.firstName',
      providerLastName: 'provider.lastName',
      media: 'featuredImage',
    },
    prepare(selection) {
      const { providerFirstName, providerLastName } = selection;
      return {
        ...selection,
        subtitle:
          providerFirstName &&
          providerFirstName &&
          `by ${providerFirstName} ${providerLastName}`,
      };
    },
  },
});
