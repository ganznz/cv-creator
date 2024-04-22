import React from "react";
import Panel from "../Panel";
import { TailwindUtilityClasses } from "../../types/GenericTypes";

interface NavbarProps {
    children: React.ReactNode;
    classes?: TailwindUtilityClasses;
}

export default function Navbar({ children, classes }: NavbarProps) {
    const defaultClasses = ["flex", "flex-1", "rounded"];
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
