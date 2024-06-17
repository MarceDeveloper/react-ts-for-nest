import React from 'react';
import { Card_2_Faces } from '../components/CardCubo/Card_2_Faces';
import { Card1 } from '../components/Cards/Card1';

export const Card_Cubo_Page: React.FC = () => {
    return (
        // <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        //   {/* <Card_2_Faces /> */}
        //   <Card1/>
        // </div>

        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <Card1 />
        </div>
    );
};

