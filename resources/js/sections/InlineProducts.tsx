const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 2,
    name: 'Classic Hoodie',
    href: '#',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-02.jpg',
    imageAlt: "Front of men's Classic Hoodie in gray.",
    price: '$65',
    color: 'Gray',
  },
  {
    id: 3,
    name: 'Slim Fit Jeans',
    href: '#',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-03.jpg',
    imageAlt: "Front of men's Slim Fit Jeans in blue.",
    price: '$50',
    color: 'Blue',
  },
{
  id: 4,
  name: 'Casual Sneakers',
  href: '#',
  imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-04.jpg',
  imageAlt: "Front of men's Casual Sneakers in white.",
  price: '$80',
  color: 'White',
},
{
  id: 5,
  name: 'Leather Wallet',
  href: '#',
  imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
  imageAlt: "Front of men's Leather Wallet in brown.",
  price: '$45',
  color: 'Brown',
},
{
  id: 6,
  name: 'Striped Shirt',
  href: '#',
  imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-02.jpg',
  imageAlt: "Front of men's Striped Shirt in blue and white.",
  price: '$55',
  color: 'Blue/White',
},
{
  id: 7,
  name: 'Denim Jacket',
  href: '#',
  imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-03.jpg',
  imageAlt: "Front of men's Denim Jacket in light blue.",
  price: '$75',
  color: 'Light Blue',
},
{
  id: 8,
  name: 'Leather Belt',
  href: '#',
  imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-04.jpg',
  imageAlt: "Front of men's Leather Belt in black.",
  price: '$40',
  color: 'Black',
},
];

export default function InlineProducts() {
  return (
    <div className="">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-50">Customers also purchased</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <img
                alt={product.imageAlt}
                src={product.imageSrc}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700 dark:text-gray-400">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900 dark:text-gray-500">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
