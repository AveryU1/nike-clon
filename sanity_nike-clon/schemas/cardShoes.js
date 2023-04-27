export default {
  name: 'cardShoes',
  title: 'CardShoes',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotSpot: true,
      },
    },
    {
      name: 'largeText',
      title: 'LargeText',
      type: 'string',
    },
    {
      name: 'midText',
      title: 'MidText',
      type: 'string',
    },
  ],
}
