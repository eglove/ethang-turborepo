import { codeInput } from '@sanity/code-input';
import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { deskStructure } from 'util-sanity';

import schema from './schemas/schema';
export default defineConfig({
  dataset: 'production',
  name: 'default',
  plugins: [
    deskTool({
      structure: deskStructure,
    }),
    visionTool(),
    codeInput(),
  ],
  projectId: 'ipn3uarr',
  schema: {
    types: schema,
  },
  title: 'EthanG Admin',
});
