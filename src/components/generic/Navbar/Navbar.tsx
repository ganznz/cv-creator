import React from "react";
import Panel from "../Panel";

interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> {
    direction: "horizontal" | "vertical";
    children: React.ReactNode;
}

export default function Navbar({ direction, children, ...props }: NavbarProps) {
    let classes = `flex gap-3 ${
        (direction == "vertical" && "flex-col") || "flex-row"
    }`;
    classes = { ...props }.className
        ? `${classes} ${{ ...props }.className}`
        : classes;

    return (
        <>
            <Panel className={classes}>{children}</Panel>
        </>
    );
}
