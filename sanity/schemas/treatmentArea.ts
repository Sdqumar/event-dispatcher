import { defineField, defineType } from 'sanity';

// TODO doc to treatmentAreaPage (update sanity and update client references)
export default defineType({
  name: 'treatment',
  title: 'Treatment Area Pages',
  type: 'document',
  groups: [
    {
      name: 'seo',
      title: 'SEO & Social',
    },
  ],
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
      },
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'slug',
      description: 'Preview of final URL including any parent pages',
      // components: {
      //   input: SlugInput,
      // },
      // options: {
      //   urlPrefix: async (document: any, context: any) => {
      //     const URL = 'https://claritychi.com/';
      //     if (document?.parentTreatment?._ref) {
      //       const client = context.getClient({ apiVersion: '2021-03-25' });
      //       const query = '*[_type=="treatment" && _id == $ref]{...}';
      //       const params = { ref: document?.parentTreatment?._ref };
      //       const data = await client.fetch(query, params);
      //       return `${URL}${data[0]?.slug?.current}/`;
      //     }
      //     return URL as any;
      //   },
      // },
    }),
    defineField({
      name: 'parentTreatment',
      title: 'Parent Page',
      type: 'reference',
      description:
        'Select parent so that the this treatment area document alway work as child',
      to: [{ type: 'treatment' }],
      options: {
        disableNew: true,
        filter: ({ document }: any) => {
          return {
            filter: 'slug.current != $slug',
            params: { slug: document.slug.current },
          };
        },
      },
    }),
    defineField({
      name: 'heading1',
      title: 'Heading1',
      type: 'string',
    }),
    defineField({
      name: 'heading1Caption',
      title: 'Heading1 Caption',
      type: 'string',
    }),
    defineField({
      name: 'buttionText',
      title: 'Button Text',
      type: 'string',
    }),

    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
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
      title: 'label',
      media: 'mainImage',
    },
  },
});
