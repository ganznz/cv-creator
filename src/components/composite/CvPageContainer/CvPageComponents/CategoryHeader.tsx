import { HTMLProps } from "react";
import { twMerge } from "tailwind-merge";

interface CategoryHeaderProps extends HTMLProps<HTMLDivElement> {
    text: string;
    primaryColour?: string;
    secondaryColour?: string;
}

export const CategoryHeader = ({
    text,
    className,
    primaryColour = "#000",
    secondaryColour = "#fff",
}: CategoryHeaderProps) => {
    let classes =
        "flex justify-center content-center bg-[#f0f0f0] font-bold p-1";
    classes = className ? twMerge(classes, className) : classes;
    return (
        <div style={{ backgroundColor: secondaryColour }} className={classes}>
            <h3 style={{ color: primaryColour }} className="text-xl">
                {text}
            </h3>
        </div>
    );
};
