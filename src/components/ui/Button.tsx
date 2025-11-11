'use client';
import React from 'react';
import { cn } from '@/lib/data/utils';

export const Button = ({
                           children,
                           className,
                           onClick,
                           type = 'button',
                       }: {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
}) => (
    <button
        type={type}
        onClick={onClick}
        className={cn(
            'inline-flex items-center justify-center rounded-full border border-white text-white',
            'px-8 py-3 text-sm font-medium tracking-wide transition-all',
            'hover:bg-white hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900',
            className
        )}
    >
        {children}
    </button>
);
