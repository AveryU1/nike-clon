export default {
  name: 'summerShop',
  title: 'SummerShop',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',

      options: {
        hotspot: true,
      },
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
  ],
}
