
export const productSize = {
    name: "productSize",
    type: "document",
    title: "Product Size",
    fields: [
        // {
        //     name: "title",
        //     validation: (Rule: any) => Rule.required(),
        //     type: "string",
        //     title: "Size Title",
        //     description: "The name/title of the variant"
        // },
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
                layout: 'radio', // or 'dropdown'
            },
            validation: (Rule: any) => Rule.required()
        },
        {
            name: "quantity",
            type: "number",
            validation: (Rule: any) => Rule.required(),
            title: "Quantity",
            description: "The quantity of this variant available"
        },

    ],
}




