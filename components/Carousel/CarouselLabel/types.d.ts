import React from 'react';

export type Group = "quick" | "prev" | "next" | "photo";

export interface CarouselLabelProps {
    name: string
    group: Group
    number: number
    children?: React.ReactNode
}