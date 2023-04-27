interface Footer {
   name?: string,
   id: number,
   submenu: boolean
   fields: {name: string}[],
}

interface Terms {
   names: string
}

export const footerLinks: Footer[] = [
   {
      id: 1,
      submenu: true,
      fields: [
            {  name: 'promotions'   },
            {  name: 'gift cards'   },
            {  name: 'find a store' },
            {  name: 'sign up for email'  },
            {  name: 'become a member' },
            {  name: 'nike journal' },
            {  name: 'send us feedback' },
         ]
   },
   {
      name: 'get help',
      id: 2,
      submenu: true,
      fields: [
            {  name: 'Order Status'   },
            {  name: 'Shipping and Delivery'   },
            {  name: 'Returns' },
            {  name: 'Order Cancellation'  },
            {  name: 'Payment Options' },
            {  name: 'Gift Card Balance' },
            {  name: 'Contact Us' },
         ]
   },
   {
      name: 'about nike',
      id: 3,
      submenu: true,
      fields: [
            {  name: 'News'   },
            {  name: 'Careers'   },
            {  name: 'Investors' },
            {  name: 'Purpose'  },
            {  name: 'Sustainability' },
         ]
   },

]

export const termsFooter: Terms[] = [
   { names: 'Guides' },
   { names: 'Terms of Sale' },
   { names: 'Terms of Use' },
   { names: 'Nike Privacy Policy' },
   { names: 'Your Privacy Choices' },
]