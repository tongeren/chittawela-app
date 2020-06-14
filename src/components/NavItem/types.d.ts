import { SyntheticEvent } from "react";

export interface NavItemProps {
    href: string
    text: string
    onClick?: (event:SyntheticEvent) => void
}