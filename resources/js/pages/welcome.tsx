import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
} from '@headlessui/react';
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Head, Link } from '@inertiajs/react';
import { Fragment, useState } from 'react';

import AppLogoIcon from '@/components/app-logo-icon';
import { Button } from '@/components/ui/button';
import Hero from '@/sections/Hero';
import InlineProducts from '@/sections/InlineProducts';
import { Gift } from 'lucide-react';
import Cart from '@/sections/Cart';
import SearchModal from '@/components/SearchModal';

const navigation = {
    categories: [
        {
            id: 'mujeres',
            name: 'Mujeres',
            featured: [
                {
                    name: 'Nuevas Llegadas',
                    href: '#',
                    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/mega-menu-category-01.jpg',
                    imageAlt: 'Modelos sentadas espalda con espalda, usando camisetas básicas en negro y beige.',
                },
                {
                    name: 'Camisetas Básicas',
                    href: '#',
                    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/mega-menu-category-02.jpg',
                    imageAlt: 'Vista de cerca del paquete de camisetas básicas en blanco roto, ocre, oliva y negro.',
                },
            ],
            sections: [
                {
                    id: 'ropa',
                    name: 'Ropa',
                    items: [
                        { name: 'Tops', href: '#' },
                        { name: 'Vestidos', href: '#' },
                        { name: 'Pantalones', href: '#' },
                        { name: 'Mezclilla', href: '#' },
                        { name: 'Suéteres', href: '#' },
                        { name: 'Camisetas', href: '#' },
                        { name: 'Chaquetas', href: '#' },
                        { name: 'Ropa Deportiva', href: '#' },
                        { name: 'Ver Todo', href: '#' },
                    ],
                },
                {
                    id: 'accesorios',
                    name: 'Accesorios',
                    items: [
                        { name: 'Relojes', href: '#' },
                        { name: 'Carteras', href: '#' },
                        { name: 'Bolsos', href: '#' },
                        { name: 'Gafas de Sol', href: '#' },
                        { name: 'Sombreros', href: '#' },
                        { name: 'Cinturones', href: '#' },
                    ],
                },
                {
                    id: 'marcas',
                    name: 'Marcas',
                    items: [
                        { name: 'Full Nelson', href: '#' },
                        { name: 'My Way', href: '#' },
                        { name: 'Re-Arranged', href: '#' },
                        { name: 'Counterfeit', href: '#' },
                        { name: 'Significant Other', href: '#' },
                    ],
                },
            ],
        },
        {
            id: 'hombres',
            name: 'Hombres',
            featured: [
                {
                    name: 'Nuevas Llegadas',
                    href: '#',
                    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
                    imageAlt: 'Parte superior con cordón y cierre de lazo elástico con acolchado interior texturizado.',
                },
                {
                    name: 'Camisetas con Arte',
                    href: '#',
                    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-02-image-card-06.jpg',
                    imageAlt:
                        'Tres camisetas en gris, blanco y azul dispuestas en una mesa con el mismo dibujo lineal de manos y formas superpuestas en la parte delantera de la camiseta.',
                },
            ],
            sections: [
                {
                    id: 'ropa',
                    name: 'Ropa',
                    items: [
                        { name: 'Tops', href: '#' },
                        { name: 'Pantalones', href: '#' },
                        { name: 'Suéteres', href: '#' },
                        { name: 'Camisetas', href: '#' },
                        { name: 'Chaquetas', href: '#' },
                        { name: 'Ropa Deportiva', href: '#' },
                        { name: 'Ver Todo', href: '#' },
                    ],
                },
                {
                    id: 'accesorios',
                    name: 'Accesorios',
                    items: [
                        { name: 'Relojes', href: '#' },
                        { name: 'Carteras', href: '#' },
                        { name: 'Bolsos', href: '#' },
                        { name: 'Gafas de Sol', href: '#' },
                        { name: 'Sombreros', href: '#' },
                        { name: 'Cinturones', href: '#' },
                    ],
                },
                {
                    id: 'marcas',
                    name: 'Marcas',
                    items: [
                        { name: 'Re-Arranged', href: '#' },
                        { name: 'Counterfeit', href: '#' },
                        { name: 'Full Nelson', href: '#' },
                        { name: 'My Way', href: '#' },
                    ],
                },
            ],
        },
    ],
    pages: [
        { name: 'Empresa', href: '#' },
        { name: 'Tiendas', href: '#' },
    ],
};

export default function Welcome() {
    const [open, setOpen] = useState(false);
    const [openCart, setOpenCart] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="bg-white">
                {/* Mobile menu */}
                <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
                    <DialogBackdrop
                        transition
                        className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
                    />

                    <div className="fixed inset-0 z-40 flex">
                        <DialogPanel
                            transition
                            className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-closed:-translate-x-full"
                        >
                            <div className="flex px-4 pt-5 pb-2">
                                <button
                                    type="button"
                                    onClick={() => setOpen(false)}
                                    className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                                >
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Close menu</span>
                                    <XMarkIcon aria-hidden="true" className="size-6" />
                                </button>
                            </div>

                            {/* Links */}
                            <TabGroup className="mt-2">
                                <div className="border-b border-gray-200">
                                    <TabList className="-mb-px flex space-x-8 px-4">
                                        {navigation.categories.map((category) => (
                                            <Tab
                                                key={category.name}
                                                className="flex-1 border-b-2 border-transparent px-1 py-4 text-base font-medium whitespace-nowrap text-gray-900 data-selected:border-indigo-600 data-selected:text-indigo-600"
                                            >
                                                {category.name}
                                            </Tab>
                                        ))}
                                    </TabList>
                                </div>
                                <TabPanels as={Fragment}>
                                    {navigation.categories.map((category) => (
                                        <TabPanel key={category.name} className="space-y-10 px-4 pt-10 pb-8">
                                            <div className="grid grid-cols-2 gap-x-4">
                                                {category.featured.map((item) => (
                                                    <div key={item.name} className="group relative text-sm">
                                                        <img
                                                            alt={item.imageAlt}
                                                            src={item.imageSrc}
                                                            className="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"
                                                        />
                                                        <a href={item.href} className="mt-6 block font-medium text-gray-900">
                                                            <span aria-hidden="true" className="absolute inset-0 z-10" />
                                                            {item.name}
                                                        </a>
                                                        <p aria-hidden="true" className="mt-1">
                                                            Shop now
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                            {category.sections.map((section) => (
                                                <div key={section.name}>
                                                    <p id={`${category.id}-${section.id}-heading-mobile`} className="font-medium text-gray-900">
                                                        {section.name}
                                                    </p>
                                                    <ul
                                                        role="list"
                                                        aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                                                        className="mt-6 flex flex-col space-y-6"
                                                    >
                                                        {section.items.map((item) => (
                                                            <li key={item.name} className="flow-root">
                                                                <a href={item.href} className="-m-2 block p-2 text-gray-500">
                                                                    {item.name}
                                                                </a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </TabPanel>
                                    ))}
                                </TabPanels>
                            </TabGroup>

                            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                                {navigation.pages.map((page) => (
                                    <div key={page.name} className="flow-root">
                                        <a href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                                            {page.name}
                                        </a>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                                <div className="flow-root">
                                    <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                                        Sign in
                                    </a>
                                </div>
                                <div className="flow-root">
                                    <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                                        Create account
                                    </a>
                                </div>
                            </div>
                        </DialogPanel>
                    </div>
                </Dialog>

                <header className="relative bg-white">
                    <div className="bg-[#204771]">
                        <p className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
                            <span>
                                <Gift className="mr-2 inline h-4 w-4" />
                                Obtenga envío gratuito en pedidos superiores a 700Bs.
                            </span>
                            <div className="border-t border-gray-200 px-4 py-6">
                                <a href="#" className="-m-2 flex items-center p-2">
                                    <img src="https://flagcdn.com/bo.svg" alt="Flag of Bolivia" className="block h-auto w-5 shrink-0"></img>
                                    <span className="ml-3 block text-base font-medium">BO</span>
                                    <span className="sr-only">, change currency</span>
                                </a>
                            </div>
                        </p>
                    </div>

                    <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="border-b border-gray-200">
                            <div className="flex h-16 items-center">
                                <button
                                    type="button"
                                    onClick={() => setOpen(true)}
                                    className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                                >
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Abrir Menu</span>
                                    <Bars3Icon aria-hidden="true" className="size-6" />
                                </button>

                                {/* Logo */}
                                <div className="ml-4 flex lg:ml-0">
                                    <a href="#">
                                        <span className="sr-only">Ecommerce</span>
                                        <AppLogoIcon className="h-8 w-auto" />
                                    </a>
                                </div>

                                {/* Flyout menus */}
                                <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
                                    <div className="flex h-full space-x-8">
                                        {navigation.categories.map((category) => (
                                            <Popover key={category.name} className="flex">
                                                <div className="relative flex">
                                                    <PopoverButton className="relative z-10 -mb-px flex items-center border-0 border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 ring-0 transition-colors duration-200 ease-out hover:text-gray-800 data-open:border-indigo-600 data-open:text-indigo-600">
                                                        {category.name}
                                                    </PopoverButton>
                                                </div>

                                                <PopoverPanel
                                                    transition
                                                    className="absolute inset-x-0 top-full z-50 text-sm text-gray-500 transition data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                                                >
                                                    {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                                    <div aria-hidden="true" className="absolute inset-0 top-1/2 bg-white shadow-sm" />

                                                    <div className="relative bg-white">
                                                        <div className="mx-auto max-w-7xl px-8">
                                                            <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                                                                <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                                                    {category.featured.map((item) => (
                                                                        <div key={item.name} className="group relative text-base sm:text-sm">
                                                                            <img
                                                                                alt={item.imageAlt}
                                                                                src={item.imageSrc}
                                                                                className="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"
                                                                            />
                                                                            <a href={item.href} className="mt-6 block font-medium text-gray-900">
                                                                                <span aria-hidden="true" className="absolute inset-0 z-10" />
                                                                                {item.name}
                                                                            </a>
                                                                            <p aria-hidden="true" className="mt-1">
                                                                                Shop now
                                                                            </p>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                                <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                                                    {category.sections.map((section) => (
                                                                        <div key={section.name}>
                                                                            <p id={`${section.name}-heading`} className="font-medium text-gray-900">
                                                                                {section.name}
                                                                            </p>
                                                                            <ul
                                                                                role="list"
                                                                                aria-labelledby={`${section.name}-heading`}
                                                                                className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                                                            >
                                                                                {section.items.map((item) => (
                                                                                    <li key={item.name} className="flex">
                                                                                        <a href={item.href} className="hover:text-gray-800">
                                                                                            {item.name}
                                                                                        </a>
                                                                                    </li>
                                                                                ))}
                                                                            </ul>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </PopoverPanel>
                                            </Popover>
                                        ))}

                                        {navigation.pages.map((page) => (
                                            <a
                                                key={page.name}
                                                href={page.href}
                                                className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                                            >
                                                {page.name}
                                            </a>
                                        ))}
                                    </div>
                                </PopoverGroup>

                                <div className="ml-auto flex items-center">
                                    <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                                        <Link href={route('login')} className="text-sm font-medium text-gray-700 hover:text-gray-800">
                                            Iniciar Sesión
                                        </Link>
                                        <span aria-hidden="true" className="h-6 w-px bg-gray-200" />
                                        <Link href={route('register')} className="text-sm font-medium text-gray-700 hover:text-gray-800">
                                            <Button variant={'secondary'}>Crear Cuenta</Button>
                                        </Link>
                                    </div>

                                    {/* Search Button */}
                                    <button
                                        type="button"
                                        onClick={() => setOpenSearch(true)}
                                        className="ml-4 p-2 text-gray-400 hover:text-gray-500"
                                    >
                                        <span className="sr-only">Buscar</span>
                                        <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>

                                    {/* Cart */}
                                    <div className="ml-4 flow-root lg:ml-6">
                                        <a href="#" onClick={() => setOpenCart(true)} className="group -m-2 flex items-center p-2">
                                            <ShoppingBagIcon aria-hidden="true" className="size-6 shrink-0 text-gray-400 group-hover:text-gray-500" />
                                            <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                                            <span className="sr-only">items in cart, view bag</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>

            <Hero />
            <InlineProducts />
            <Cart open={openCart} setOpen={setOpenCart} />
            <SearchModal open={openSearch} setOpen={setOpenSearch} />
        </>
    );
}
