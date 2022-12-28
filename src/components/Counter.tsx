import React from 'react';

interface CounterProps {
    title: string;
    number: number;
}

export default function Counter({title, number}: CounterProps) {
    return (
        <div className="counter flex flex-col justify-center items-center gap-4">
            <p className="counter-number bg-black text-white p-4 rounded-xl font-bold text-[4rem] min-w-[80px] text-center">{number}</p>
            <h3 className="counter-text text-[1.17em]">{title}</h3>
        </div>
    )
}