import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'mainMenu',
      description: 'The main menu for the site',
      title: 'Main Menu',
      type: 'reference',
      to: [{ type: 'menu' }],
    }),
    defineField({
      name: 'footerMenu',
      description: 'The footer menu for the site',
      title: 'Footer Menu',
      type: 'reference',
      to: [{ type: 'menu' }],
    }),
  ],
  preview: {
    prepare(): any {
      return {
        title: 'Site Settings',
      };
    },
  },
});
