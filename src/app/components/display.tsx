'use client'
import React from 'react';

interface DisplayProps {
    value: string;
}

const Display: React.FC<DisplayProps> = ({ value }) => {
    return (
        <div className="bg-gray-200 p-2">
            <input
                type="text"
                className="w-full p-2 text-2xl text-right border border-gray-400 rounded"
                placeholder="0"
                readOnly
                value={value}
            />
        </div>
    );
};

export default Display;
