export const category = {
    name: "category",
    type: "document",
    title: "Category",
    fields: [
        {
            name: "title",
            type: "string",
            title: "Category Title",
            description: "The name/title of the category",
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
            name: "description",
            type: "text",
            title: "Category Description",
            description: "Describe what this category is about",
        },
    ],
}
