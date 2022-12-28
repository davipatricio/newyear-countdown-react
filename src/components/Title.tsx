import React from 'react';

interface TitleProps {
    title: string;
}

export default function Title({title}: TitleProps) {
    return (
        <h1 className="title text-[2em] font-bold text-4xl text-center mb-4">{title}</h1>
    )
}