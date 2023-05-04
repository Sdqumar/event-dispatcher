import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'notification',
  title: 'Notification',
  type: 'document',
  fields: [
    defineField({
      name: 'subject',
      title: 'Subject',
      type: 'string',
    }),
    defineField({
      name: 'to',
      title: 'To',
      type: 'email',
    }),
    defineField({
      name: 'Ccs',
      title: 'Ccs',
      type: 'array',
      of: [{ type: 'email' }],
    }),
    defineField({
      name: 'fromName',
      title: 'From Name',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'email',
    }),
    defineField({
      name: 'replyTo',
      title: 'Reply To',
      type: 'email',
    }),
  ],
});
