// schema for ecommerce product

export const product = {
    name: "product",
    type: "document",
    title: "Product",
    fields: [
        {
            name: "title",
            type: "string",
            title: "Product Title",
            description: "The name/title of the product"
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        },
        {
            name: "type",
            type: "string",
            title: "Product Type",
            description: "The type or tag of the product",
        },
        {
            name: "category",
            type: "reference",
            title: "Category",
            description: "The category the product belongs to",
            to: [{ type: "category" }]
        },
        {
            name: "sku",
            type: "string",
            title: "SKU",
            description: "The SKU of this product",
            validation: (Rule: any) => Rule.required(),
        },
        {
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
        },
        {
            name: "sizes",
            type: "array",
            title: "Sizes",
            of: [
                {
                    type: "object",
                    name: "productSize",
                    title: "Product Size",
                    fields: [
                        {
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
                        },
                        {
                            name: "quantity",
                            type: "number",
                            title: "Quantity",
                            description: "The quantity of this size available",
                            validation: (Rule: any) => Rule.required()
                        },
                    ]
                }
            ]
        },
        {
            name: "price",
            type: "number",
            title: "Price",
            description: "The price of the product"
        },
        {
            name: "productDetails",
            type: "text",
            title: "Product Details",
            description: "Detailed information about the product"
        },
        {
            name: "productCare",
            type: "array",
            title: "Product Care",
            description: "Care instructions for the product",
            of: [{ type: "string" }]
        },

        {
            name: 'variantImages',
            title: 'Variant Images',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
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
                        },
                    ],
                },
            ],
        }

    ]
}
