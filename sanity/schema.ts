import { type SchemaTypeDefinition } from 'sanity'
import { product } from './lib/product'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product],
}
