'use client'
import React, { useState } from 'react';
import Display from '../components/display';
import Keyboard from '../components/keyboard';

const Calculator: React.FC = () => {
    const [input, setInput] = useState<string>('');

    const handleButtonClick = (button: string) => {
        switch (button) {
            case '=':
                try {
                    setInput(eval(input).toString());
                } catch (error) {
                    setInput('Error');
                }
                break;
            case 'C':
                setInput('');
                break;
            default:
                setInput(input + button);
                break;
        }
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-lg shadow-lg">
            <Display value={input} />
            <Keyboard onButtonClick={handleButtonClick} />
        </div>
    );
};

export default Calculator;
