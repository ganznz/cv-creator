import { HTMLProps } from "react";
import { twMerge } from "tailwind-merge";
import { padding1 } from "../../../utils/constants/tailwind-utility-classes";

interface TextAreaProps extends HTMLProps<HTMLTextAreaElement> {
    label?: string;
    description?: string;
}

export const TextArea = ({
    label,
    description,
    className,
    ...props
}: TextAreaProps) => {
    const defaultClasses = [
        `${padding1}`,
        "bg-gray-200",
        "rounded-lg",
        "text-sm",
        "w-full",
        "transition-all",
        "outline-none",
        "focus:ring-2",
        "focus:ring-[#4b8bfa]",
        "focus:drop-shadow-lg",
    ];
    const classes = className
        ? twMerge(defaultClasses.join(" "), className)
        : defaultClasses.join(" ");

    return (
        <>
            <span className="-mb-1">
                <span className="flex gap-3 items-center">
                    {label && (
                        <label htmlFor={{ ...props }.id} className="font-bold">
                            {label}
                        </label>
                    )}
                    {description && (
                        <p className="text-sm text-gray-500 italic">
                            {description}
                        </p>
                    )}
                </span>
            </span>
            <textarea className={classes} {...props} rows={4}></textarea>
        </>
    );
};
