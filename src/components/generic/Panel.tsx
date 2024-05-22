import { ReactNode } from "react";
import { padding2 } from "../../constants/tailwind-utility-classes";
import { HTMLProps } from "react";

export interface PanelProps extends HTMLProps<HTMLElement> {
    children?: ReactNode;
}

export default function Panel({ children, ...props }: PanelProps) {
    let classes = `bg-white ${padding2} rounded-lg drop-shadow-md hover:drop-shadow-xl transition-all`;
    classes = { ...props }.className
        ? `${classes} ${{ ...props }.className}`
        : classes;

    return <div className={classes}>{children}</div>;
}
