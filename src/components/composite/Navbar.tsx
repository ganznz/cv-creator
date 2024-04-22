import React from "react";
import Panel from "../generic/Panel";

interface NavbarProps {
    children: React.ReactNode;
}

export default function Navbar({ children }: NavbarProps) {
    return (
        <>
            <Panel>{children}</Panel>
        </>
    );
}
