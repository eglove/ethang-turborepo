import { codeInput } from '@sanity/code-input';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

import { deskStructure } from './desk-structure';
import schema from './schemas/schema';
export default defineConfig({
  dataset: 'production',
  name: 'default',
  plugins: [
    deskTool({
      structure: deskStructure,
    }),
    codeInput(),
  ],
  projectId: '540gjnt8',
  schema: {
    types: schema,
  },
  title: 'Sterett Creek Village Trustee Admin',
});
