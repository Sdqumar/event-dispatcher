// ./deskStructure.js

import { StructureResolver } from 'sanity/desk';
const contents = [
  'post',
  'provider',
  'treatment',
  'formbuilder',
  'location',
  'grouppage',
  'menu',
  'redirects',
];

export const myStructure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      ...S.documentTypeListItems().filter((listItem) => {
        return [...contents].includes(listItem.getId() as string);
      }),
      S.divider(),
      S.listItem()
        .title('Site Settings')
        .child(
          S.document().schemaType('siteSettings').documentId('siteSettings'),
        ),
    ]);
