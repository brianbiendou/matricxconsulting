import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemas} from './sanity/schemas'

export default defineConfig({
  name: 'matricx-consulting',
  title: 'MatriCx Consulting',

  projectId: 'ozf76xbs',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemas,
  },
})
