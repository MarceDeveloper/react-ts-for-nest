import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Dialog } from '@headlessui/react';
import { Sidebar } from '../components/Sidebar';
import { SidebarLayout } from '../components/SidebarLayout';

interface Item {
    id: number;
    name: string;
    description: string;
}

export const CRUDPage: React.FC = () => {
    const [items, setItems] = useState<Item[]>([
        { id: 1, name: 'Item 1', description: 'Description 1' },
        { id: 2, name: 'Item 2', description: 'Description 2' },
    ]);

    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [currentItem, setCurrentItem] = useState<Item | null>(null);
    const [searchTerm, setSearchTerm] = useState('');

    const { register, handleSubmit, reset } = useForm<Item>();

    const openCreateModal = () => {
        reset();
        setIsCreateModalOpen(true);
    };

    const openEditModal = (item: Item) => {
        setCurrentItem(item);
        reset(item);
        setIsEditModalOpen(true);
    };

    const openDeleteModal = (item: Item) => {
        setCurrentItem(item);
        setIsDeleteModalOpen(true);
    };

    const onSubmit = (data: Item) => {
        if (currentItem) {
            setItems((prevItems) => prevItems.map((item) => (item.id === currentItem.id ? data : item)));
        } else {
            setItems((prevItems) => [...prevItems, { ...data, id: prevItems.length + 1 }]);
        }
        closeModals();
    };

    const onDelete = () => {
        if (currentItem) {
            setItems((prevItems) => prevItems.filter((item) => item.id !== currentItem.id));
        }
        closeModals();
    };

    const closeModals = () => {
        setIsCreateModalOpen(false);
        setIsEditModalOpen(false);
        setIsDeleteModalOpen(false);
        setCurrentItem(null);
    };

    const filteredItems = items.filter(
        (item) =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <SidebarLayout margen='p-0'>
            <div className="flex-1 bg-gray-100 p-6 ">
                <h1 className="text-3xl font-bold mb-6">CRUD Page</h1>
                <div className="flex justify-between mb-4">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="p-2 border "
                    />
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                        onClick={openCreateModal}
                    >
                        Create Item
                    </button>
                </div>
                <table className="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th className="py-2">ID</th>
                            <th className="py-2">Name</th>
                            <th className="py-2">Description</th>
                            <th className="py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredItems.map((item) => (
                            <tr key={item.id}>
                                <td className="py-2">{item.id}</td>
                                <td className="py-2">{item.name}</td>
                                <td className="py-2">{item.description}</td>
                                <td className="py-2">
                                    <button
                                        className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
                                        onClick={() => openEditModal(item)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="bg-red-500 text-white px-4 py-2 rounded"
                                        onClick={() => openDeleteModal(item)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Create Modal */}
                <Dialog open={isCreateModalOpen} onClose={closeModals} className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-screen px-4">
                        <div className="fixed inset-0 bg-black opacity-30" onClick={closeModals}></div>
                        <div className="bg-white rounded max-w-sm w-full p-6 mx-auto relative z-20">
                            <Dialog.Title className="text-2xl font-bold mb-4">Create Item</Dialog.Title>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="mb-4">
                                    <label className="block mb-1">Name</label>
                                    <input
                                        className="w-full p-2 border rounded"
                                        {...register('name', { required: true })}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-1">Description</label>
                                    <input
                                        className="w-full p-2 border rounded"
                                        {...register('description', { required: true })}
                                    />
                                </div>
                                <div className="flex justify-end">
                                    <button
                                        type="button"
                                        className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                                        onClick={closeModals}
                                    >
                                        Cancel
                                    </button>
                                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                                        Save
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </Dialog>

                {/* Edit Modal */}
                <Dialog open={isEditModalOpen} onClose={closeModals} className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-screen px-4">
                        <div className="fixed inset-0 bg-black opacity-30" onClick={closeModals}></div>
                        <div className="bg-white rounded max-w-sm w-full p-6 mx-auto relative z-20">
                            <Dialog.Title className="text-2xl font-bold mb-4">Edit Item</Dialog.Title>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="mb-4">
                                    <label className="block mb-1">Name</label>
                                    <input
                                        className="w-full p-2 border rounded"
                                        {...register('name', { required: true })}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-1">Description</label>
                                    <input
                                        className="w-full p-2 border rounded"
                                        {...register('description', { required: true })}
                                    />
                                </div>
                                <div className="flex justify-end">
                                    <button
                                        type="button"
                                        className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                                        onClick={closeModals}
                                    >
                                        Cancel
                                    </button>
                                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                                        Save
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </Dialog>

                {/* Delete Modal */}
                <Dialog open={isDeleteModalOpen} onClose={closeModals} className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-screen px-4">
                        <div className="fixed inset-0 bg-black opacity-30" onClick={closeModals}></div>
                        <div className="bg-white rounded max-w-sm w-full p-6 mx-auto relative z-20">
                            <Dialog.Title className="text-2xl font-bold mb-4">Delete Item</Dialog.Title>
                            <p className="mb-4">Are you sure you want to delete this item?</p>
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                                    onClick={closeModals}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="button"
                                    className="bg-red-500 text-white px-4 py-2 rounded"
                                    onClick={onDelete}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </div>
        </SidebarLayout>
    );
};
