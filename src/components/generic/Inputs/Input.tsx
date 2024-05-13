import { ComponentPropsWithoutRef } from "react";
import { padding1 } from "../../../constants/tailwind-utility-classes";

interface InputProps extends ComponentPropsWithoutRef<"input"> {
    label?: string;
    description?: string;
}

export default function Input({ label, description, ...props }: InputProps) {
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

    return (
        <>
            <span className="flex gap-3 -mb-1 items-center">
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
            <input className={defaultClasses.join(" ")} {...props} />
        </>
    );
}
