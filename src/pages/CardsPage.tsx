import React from 'react';
import { Sidebar } from '../components/Sidebar';
import { SidebarLayout } from '../components/SidebarLayout';

const Card1: React.FC<{ title: string; description: string }> = ({ title, description }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700">{description}</p>
    </div>
);

const Card2: React.FC<{ title: string; description: string }> = ({ title, description }) => (
    <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p>{description}</p>
    </div>
);

const Card3: React.FC<{ title: string; description: string }> = ({ title, description }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700">{description}</p>
    </div>
);

const Card4: React.FC<{ title: string; description: string }> = ({ title, description }) => (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p>{description}</p>
    </div>
);

const Card5: React.FC<{ title: string; description: string }> = ({ title, description }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4">
        <div className="bg-blue-500 p-4 rounded-full text-white">Icon</div>
        <div>
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <p className="text-gray-700">{description}</p>
        </div>
    </div>
);

const Card6: React.FC<{ title: string; description: string }> = ({ title, description }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700">{description}</p>
    </div>
);

export const CardsPage: React.FC = () => {
    const cardsData = [
        { title: 'Card 1', description: 'This is the description for card 1.', Component: Card1 },
        { title: 'Card 2', description: 'This is the description for card 2.', Component: Card2 },
        { title: 'Card 3', description: 'This is the description for card 3.', Component: Card3 },
        { title: 'Card 4', description: 'This is the description for card 4.', Component: Card4 },
        { title: 'Card 5', description: 'This is the description for card 5.', Component: Card5 },
        { title: 'Card 6', description: 'This is the description for card 6.', Component: Card6 },
    ];

    return (
        <SidebarLayout margen='p-0'>
            <div className="flex-1 bg-gray-100 p-6">
                <h1 className="text-3xl font-bold mb-6">Cards Page</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cardsData.map((card, index) => {
                        const CardComponent = card.Component;
                        return <CardComponent key={index} title={card.title} description={card.description} />;
                    })}
                </div>
            </div>
        </SidebarLayout>
    );
};
