import { defineField, defineType } from 'sanity';

export const galleryType = defineType({
  name: 'galleryImage',
  title: 'Gallery Image',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'Upload the photo here. Click the Crop icon in the corner to set the Hotspot!',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title / Description',
      type: 'string',
      description: 'A short description of the image (e.g., Bridal Makeup)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'Choose which section this image belongs to',
      options: {
        list: [
          { title: 'Bridal', value: 'bridal' },
          { title: 'Hair Styling', value: 'hair' },
          { title: 'Spa & Facial', value: 'spa' },
          { title: 'Mehendi', value: 'mehendi' },
          { title: 'Other', value: 'other' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'image',
    },
  },
});
