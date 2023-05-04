import { scheduledPublishing } from '@sanity/scheduled-publishing';
import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { availability } from 'sanity-plugin-availability';
import { media } from 'sanity-plugin-media';

import { defaultDocumentNode } from './defaultDocumentNode';
import { myStructure } from './deskStructure';
import { schemaTypes } from './schemas';
export default defineConfig({
  name: 'default',
  title: 'clarity-clinic',

  projectId: 'jmqfvlrp',
  dataset: 'production',

  plugins: [
    deskTool({ defaultDocumentNode, structure: myStructure }),
    visionTool(),
    scheduledPublishing(),
    availability(),
    media(),
  ],

  schema: {
    types: schemaTypes,
  },
});
