import { defineArrayMember, defineField, defineType } from 'sanity';

export default defineType({
  name: 'formbuilder',
  title: 'Form Builder',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        defineArrayMember({
          title: 'Block',
          type: 'block',
        }),
      ],
    }),
    defineField({
      name: 'fields',
      title: 'Fields',
      type: 'array',
      of: [
        {
          title: 'Field',
          name: 'Field',
          type: 'document',
          preview: {
            select: {
              title: 'label',
              subtitle: 'inputType',
            },
          },
          fields: [
            {
              title: 'Input Type',
              name: 'inputType',
              type: 'string',
              validation: (Rule) => Rule.required(),
              options: {
                list: [
                  { title: 'Text', value: 'text' },
                  { title: 'Number', value: 'number' },
                  { title: 'Email', value: 'email' },
                  { title: 'Phone Number', value: 'phone' },
                  { title: 'Date', value: 'date' },
                  { title: 'Text Field', value: 'textField' },
                  { title: 'Options', value: 'options' },
                  { title: 'Dropdown', value: 'dropdown' },
                  { title: 'File', value: 'file' },
                  { title: 'Heading', value: 'heading' },
                ],
              },
            },

            {
              title: 'Options',
              name: 'options',
              type: 'array',
              of: [
                {
                  type: 'object',
                  name: 'inline',
                  fields: [
                    { type: 'string', name: 'option' },
                    { type: 'string', name: 'value' },
                  ],
                },
              ],
              hidden: ({ parent }) =>
                parent.inputType == 'options' || parent.inputType == 'dropdown'
                  ? false
                  : true,
            },

            {
              title: 'Label',
              name: 'label',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },

            {
              type: 'boolean',
              name: 'multipleChoice',
              title: 'Multiple Choice',
              hidden: ({ parent }) => parent.inputType !== 'options',
            },
            {
              type: 'boolean',
              name: 'required',
              title: 'Required',
              initialValue: true,
              hidden: ({ parent }) => parent.inputType == 'heading',
            },

            {
              type: 'number',
              name: 'maxLength',
              title: 'Max Length',
              hidden: ({ parent }) => isTextInput(parent),
            },
            {
              type: 'number',
              name: 'minLength',
              title: 'Min Length',
              hidden: ({ parent }) => isTextInput(parent),
            },
            {
              title: 'Max Size (MegaByte)',
              name: 'maxSize',
              type: 'number',
              hidden: ({ parent }) => parent.inputType !== 'file',
            },
            {
              title: 'Allow File Types',
              name: 'fileTypes',
              type: 'array',
              hidden: ({ parent }) => parent.inputType !== 'file',
              of: [{ type: 'string' }],
              options: {
                list: [
                  { title: 'jpg', value: 'jpg' },
                  { title: 'png', value: 'png' },
                  { title: 'gif', value: 'gif' },
                  { title: 'webp', value: 'webp' },
                  { title: 'jpeg', value: 'jpeg' },
                  { title: 'pdf', value: 'pdf' },
                ],
              },
            },
            {
              title: 'Helper Text',
              name: 'helperText',
              type: 'array',
              of: [{ type: 'block' }],
              hidden: ({ parent }) => parent.inputType == 'heading',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'notifications',
      title: 'Notifications',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'notification' }] }],
    }),
  ],
});

const isTextInput = (parent: any) =>
  parent.inputType == 'text' ||
  parent.inputType == 'textField' ||
  parent.inputType == 'number'
    ? false
    : true;
