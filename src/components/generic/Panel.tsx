import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { TailwindUtilityClasses } from "../types/GenericTypes";
import { padding2 } from "../../constants/tailwind-utility-classes";

export type WrapperProps = {
    children?: ReactNode;
    classes?: TailwindUtilityClasses;
};

export default function Panel({ children, classes }: WrapperProps) {
    const defaultClasses = `bg-white ${padding2}`;
    const allClasses = twMerge(defaultClasses, classes?.join(" "));

    return <div className={allClasses}>{children}</div>;
}
