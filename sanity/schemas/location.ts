import { defineArrayMember, defineField, defineType } from 'sanity';

export default defineType({
  name: 'location',
  title: 'Location',
  type: 'document',
  groups: [
    {
      name: 'page',
      title: 'Page',
    },
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
        maxLength: 96,
      },
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
    }),
    defineField({
      name: 'fax',
      title: 'Fax',
      type: 'string',
    }),
    defineField({
      name: 'googleMyBusinessUrl',
      title: 'Google My Business URL',
      type: 'string',
    }),
    defineField({
      name: 'coordinates',
      title: 'Coordinates',
      type: 'geopoint',
    }),
    defineField({
      name: 'snazzyMapId',
      title: 'Snazzy Map ID',
      type: 'number',
    }),

    defineField({
      name: 'facilityId',
      title: 'Facility ID',
      type: 'string',
    }),

    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      group: 'page',
    }),

    defineField({
      name: 'subheading',
      title: 'Sub Heading',
      type: 'string',
      group: 'page',
    }),
    defineField({
      type: 'boolean',
      name: 'enable',
      title: 'Enable on website',
      group: 'page',
    }),
    defineField({
      name: 'gettinghere',
      title: 'Getting Here',
      type: 'array',
      group: 'page',

      of: [
        defineArrayMember({
          title: 'Body',
          type: 'block',
        }),
      ],
    }),
    defineField({
      name: 'parking',
      title: 'Parking',
      type: 'array',
      group: 'page',

      of: [
        defineArrayMember({
          title: 'Body',
          type: 'block',
        }),
      ],
    }),
    defineField({
      name: 'availability',
      type: 'availability',
      title: 'Availability',
      group: 'page',
    }),

    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      group: 'page',
      of: [
        defineArrayMember({
          title: 'Body',
          type: 'block',
        }),
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO & Social',
      type: 'seo',
      group: 'seo',
    }),
  ],
});
