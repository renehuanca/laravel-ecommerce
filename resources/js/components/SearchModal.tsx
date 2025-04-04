import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

interface SearchModalProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}

export default function SearchModal({ open, setOpen }: SearchModalProps) {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        // Implement search logic here
        console.log('Searching for:', searchQuery, 'in category:', selectedCategory);
    };

    return (
        <Dialog open={open} onClose={setOpen} className="relative z-50">
            <DialogBackdrop className="fixed inset-0 bg-black/30" aria-hidden="true" />

            <div className="fixed inset-0 flex items-center justify-center p-4">
                <DialogPanel className="w-full max-w-3xl rounded-lg bg-white p-6 shadow-xl">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-semibold text-gray-900">Buscar Productos</h2>
                        <button
                            type="button"
                            onClick={() => setOpen(false)}
                            className="rounded-md text-gray-400 hover:text-gray-500"
                        >
                            <span className="sr-only">Cerrar búsqueda</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>

                    <form onSubmit={handleSearch} className="space-y-4">
                        <div className="flex gap-4">
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="w-48 rounded-md border-0 py-2 pl-3 pr-8 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                            >
                                <option value="">Todas las categorías</option>
                                <option value="ropa">Ropa</option>
                                <option value="accesorios">Accesorios</option>
                                <option value="calzado">Calzado</option>
                                <option value="electronica">Electrónica</option>
                                <option value="hogar">Hogar</option>
                            </select>

                            <div className="relative flex-1">
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Buscar productos por nombre, marca o categoría..."
                                    className="block w-full rounded-md border-0 py-2 pl-4 pr-10 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                                />
                                <button
                                    type="submit"
                                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                                >
                                    <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </button>
                            </div>
                        </div>

                        <div className="mt-4">
                            <h3 className="text-sm font-medium text-gray-900 mb-2">Búsquedas populares</h3>
                            <div className="flex flex-wrap gap-2">
                                {['Camisetas', 'Pantalones', 'Zapatos', 'Accesorios', 'Electrónicos'].map((term) => (
                                    <button
                                        key={term}
                                        type="button"
                                        onClick={() => setSearchQuery(term)}
                                        className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 hover:bg-gray-200"
                                    >
                                        {term}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </form>
                </DialogPanel>
            </div>
        </Dialog>
    );
} 