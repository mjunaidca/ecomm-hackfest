import { type SchemaTypeDefinition } from 'sanity'
import { product } from './lib/product'
import { category } from './lib/category'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, category],
}
