import { defineField, defineType } from 'sanity';

export const categoryType = defineType({
  name: 'galleryCategory',
  title: 'Gallery Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The name of the category (e.g., Bridal, Hair Styling)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'value',
      title: 'Value (URL Safe)',
      type: 'string',
      description: 'A lowercase, no-space version of the title (e.g., bridal, hair-styling)',
      validation: (Rule) => Rule.required().lowercase(),
    }),
    defineField({
      name: 'isActive',
      title: 'Is Active?',
      type: 'boolean',
      description: 'Toggle this off to instantly hide this category from the website sorting options.',
      initialValue: true,
    }),
  ],
});
