import { defineField, defineType } from 'sanity'

export default defineType({
    name: "category",
    type: "document",
    title: "Category",
    fields: [
        defineField({
            name: "title",
            type: "string",
            title: "Category Title",
            description: "The name/title of the category",
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
            name: "description",
            type: "text",
            title: "Category Description",
            description: "Describe what this category is about",
        }),
    ],
})
