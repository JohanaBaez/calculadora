'use client'
import React from 'react';

interface KeyboardProps {
    onButtonClick: (button: string) => void;
}

const Keyboard: React.FC<KeyboardProps> = ({ onButtonClick }) => {
    const buttons = ['C', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

    return (
        <div className="grid grid-cols-4 gap-1 rounded shadow-lg bg-gray-800">
            {buttons.map((button, index) => {
                const isOperator = ['/', '*', '-', '+'].includes(button);
                const isNumber = !isNaN(Number(button)) || button === '.';
                return (
                    <button
                        key={index}
                        className={`p-6 text-3xl ${(button === '=' && 'col-span-1 bg-orange-500') ||
                            (button === '0' && 'col-span-2 bg-gray-500') ||
                            (button === 'C' && 'col-span-3 bg-gray-400') ||
                            (isNumber && 'bg-gray-500') ||
                            (isOperator && 'bg-orange-500') ||
                            'bg-gray-400'
                            } text-white rounded hover:bg-gray-600`}
                        style={{
                            border: 'none',
                            borderRadius: '0',
                        }}
                        onClick={() => onButtonClick(button)}
                    >
                        {button}
                    </button>
                );
            })}
        </div>
    );
};

export default Keyboard;
