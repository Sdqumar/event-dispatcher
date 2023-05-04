import { BsCardHeading } from 'react-icons/bs';
import {
  FiAnchor,
  FiChevronDown,
  FiExternalLink,
  FiLink2,
} from 'react-icons/fi';
import { FiImage } from 'react-icons/fi';
import { defineArrayMember, defineType } from 'sanity';

/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */
export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      // Styles let you set what your user can mark up blocks with. These
      // correspond with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'H5', value: 'h5' },
        { title: 'Quote', value: 'blockquote' },
      ],
      lists: [{ title: 'Bullet', value: 'bullet' }],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            name: 'internalLink',
            type: 'object',
            title: 'Internal link',
            icon: FiLink2,
            fields: [
              {
                name: 'referencePost',
                type: 'reference',
                title: 'Reference Post',
                to: [
                  { type: 'post' },
                  // other types you may want to link to
                ],
                options: {
                  disableNew: true,
                },
              },
            ],
          },
          {
            title: 'External link',
            name: 'link',
            type: 'object',
            icon: FiExternalLink,
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
              {
                title: 'Open in new tab',
                name: 'blank',
                type: 'boolean',
              },
            ],
          },
          {
            name: 'anchorLink',
            type: 'object',
            title: 'Anchor link',
            icon: FiChevronDown,
            fields: [
              {
                name: 'referenceAnchor',
                type: 'reference',
                title: 'Link to an existing anchor',
                to: [{ type: 'anchor' }],
                options: {
                  disableNew: true,
                },
              },
            ],
          },
          {
            name: 'anchor',
            type: 'object',
            title: 'Anchor',
            icon: FiAnchor,
            fields: [
              {
                name: 'referenceAnchor',
                type: 'reference',
                title: 'You must create a new anchor',
                to: [
                  { type: 'anchor' },
                  // other types you may want to link to
                ],
              },
            ],
          },
        ],
      },
    }),
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    defineArrayMember({
      type: 'image',
      icon: FiImage,
      options: { hotspot: true },
    }),
    defineArrayMember({
      title: 'Card',
      type: 'card',
      icon: BsCardHeading,
    }),
    defineArrayMember({
      title: 'Faq List',
      type: 'faqList',
    }),
  ],
});
