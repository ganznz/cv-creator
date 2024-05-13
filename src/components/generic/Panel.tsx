import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { TailwindUtilityClasses } from "../types/GenericTypes";
import { padding2 } from "../../constants/tailwind-utility-classes";

export type WrapperProps = {
    children?: ReactNode;
    classes?: TailwindUtilityClasses;
};

export default function Panel({ children, classes }: WrapperProps) {
    const defaultClasses: TailwindUtilityClasses = [
        "bg-white",
        `${padding2}`,
        "rounded-lg",
        "drop-shadow-md",
        "hover:drop-shadow-xl",
        "transition-all",
    ];
    const allClasses = twMerge(defaultClasses.join(" "), classes?.join(" "));

    return <div className={allClasses}>{children}</div>;
}
