import React from "react";
import Panel from "../Panel";
import { TailwindUtilityClasses } from "../../types/GenericTypes";

interface NavbarProps {
    direction: "horizontal" | "vertical";

    children: React.ReactNode;
    classes?: TailwindUtilityClasses;
}

export default function Navbar({ direction, children, classes }: NavbarProps) {
    const defaultClasses = [
        "flex",
        "inline-flex",
        "justify-between",
        "basis-0",
        "rounded",
        "gap-3",
        "padding-3",
        (direction == "vertical" && "flex-col") || "flex-row",
    ];
    return (
        <>
            <Panel
                classes={
                    (classes && defaultClasses.concat(classes)) ||
                    defaultClasses
                }
            >
                {children}
            </Panel>
        </>
    );
}
