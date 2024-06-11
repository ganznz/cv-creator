import { HTMLProps } from "react";
import { twMerge } from "tailwind-merge";

interface CategoryHeaderProps extends HTMLProps<HTMLDivElement> {
    text: string;
}

export const CategoryHeader = ({ text, className }: CategoryHeaderProps) => {
    let classes =
        "flex justify-center content-center bg-[#f0f0f0] font-bold p-1";
    classes = className ? twMerge(classes, className) : classes;
    return (
        <div className={classes}>
            <h3 className="text-xl">{text}</h3>
        </div>
    );
};
