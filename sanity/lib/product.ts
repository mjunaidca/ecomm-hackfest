// schema for ecommerce produce
export const product = {
    name: "product",
    type: "document",
    title: 'product',
    fields: [
        {
            name: "product",
            title: "Product Title",
            type: 'string'
        },
        {
            name: "description",
            title: "Product Description",
            type: 'string'
        },
        {
            name: "image",
            title: "Product Image",
            type: 'image'
        },
    ]


}