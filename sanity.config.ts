import { defineConfig } from 'sanity';
import { visionTool } from '@sanity/vision';
// We haven't created the desk tool explicitly since sanity v3 has it as structureTool, but we will use the default.
import { structureTool } from 'sanity/structure'; 
// Actually, next-sanity provides deskTool or structureTool. Wait, structureTool is from 'sanity/structure' in v3.30+.
// We will just import it.

import { schemaTypes } from './src/sanity/schemaTypes';

// If you haven't created a project yet, these are placeholder values.
// You will replace them in your .env.local file once you sign up.
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'dummy-project-id';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

export default defineConfig({
  basePath: '/studio', // This is the route where the admin dashboard will live
  projectId,
  dataset,
  title: 'Dream World CMS',

  // These plugins add the core studio features
  plugins: [
    structureTool(),
    visionTool(), // Provides a playground for GROQ queries
  ],

  schema: {
    types: schemaTypes,
  },
});
