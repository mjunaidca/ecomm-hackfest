import { defineField, defineType } from 'sanity'

export default defineType({
    name: "product",
    type: "document",
    title: "Product",
    fields: [
        defineField({
            name: "title",
            type: "string",
            title: "Product Title",
            description: "The name/title of the product",
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        }),
        defineField({
            name: "type",
            type: "string",
            title: "Product Type",
            description: "The type or tag of the product",
        }),
        defineField({
            name: "category",
            type: "reference",
            title: "Category",
            description: "The category the product belongs to",
            to: [{ type: "category" }],
        }),
        defineField({
            name: "sku",
            type: "string",
            title: "SKU",
            description: "The SKU of this product",
            validation: (Rule: any) => Rule.required(),
        }),
        defineField({
            name: 'mainImage',
            validation: (Rule: any) => Rule.required(),
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative text',
                    description: 'For screen readers and when the image cannot be loaded',
                },
                {
                    name: 'caption',
                    type: 'string',
                    title: 'Caption',
                },
            ],
        }),
        defineField({
            name: "sizes",
            type: "array",
            title: "Sizes",
            of: [
                {
                    type: "object",
                    name: "productSize",
                    title: "Product Size",
                    fields: [
                        defineField({
                            name: "size",
                            type: "string",
                            title: "Size",
                            options: {
                                list: [
                                    { title: 'XS', value: 'XS' },
                                    { title: 'S', value: 'S' },
                                    { title: 'M', value: 'M' },
                                    { title: 'L', value: 'L' },
                                    { title: 'XL', value: 'XL' },
                                ],
                                layout: 'dropdown'
                            },
                            validation: (Rule: any) => Rule.required()
                        }),
                        defineField({
                            name: "quantity",
                            type: "number",
                            title: "Quantity",
                            description: "The quantity of this size available",
                            validation: (Rule: any) => Rule.required()
                        }),
                    ]
                }
            ]
        }),
        defineField({
            name: "price",
            type: "number",
            title: "Price",
            description: "The price of the product"
        }),
        defineField({
            name: "productDetails",
            type: "text",
            title: "Product Details",
            description: "Detailed information about the product"
        }),
        defineField({
            name: "productCare",
            type: "array",
            title: "Product Care",
            description: "Care instructions for the product",
            of: [{ type: "string" }]
        }),
        defineField({
            name: 'variantImages',
            title: 'Variant Images',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'image',
                            type: 'image',
                            options: {
                                hotspot: true,
                            },
                            fields: [
                                {
                                    name: 'alt',
                                    type: 'string',
                                    title: 'Alternative text',
                                    description: 'For screen readers and when the image cannot be loaded',
                                },
                                {
                                    name: 'caption',
                                    type: 'string',
                                    title: 'Caption',
                                },
                            ],
                        }),
                    ],
                },
            ],
        })
    ]
})
