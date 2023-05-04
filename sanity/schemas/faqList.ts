import { defineArrayMember, defineType } from 'sanity';

import FaqList from '../components/FaqList';

export default defineType({
  name: 'faqList',
  title: 'FAQ List',
  type: 'document',
  fields: [
    {
      title: 'Create FAQ List',
      name: 'body',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          name: 'faq',
          to: [{ type: 'faq' }],
        }),
      ],
    },
  ],
  preview: {
    select: {
      body: 'body',
    },
  },
  components: {
    preview: FaqList,
  },
});
