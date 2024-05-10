import { useState, ComponentProps } from "react";
import {
    padding2,
    margin1x,
} from "../../../constants/tailwind-utility-classes";
import { TailwindUtilityClasses } from "../../types/GenericTypes";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ComponentProps<"button"> {
    children?: React.ReactNode;
    variant?: "primary" | "info" | "success" | "warn";
    isActive?: boolean;
    classes?: TailwindUtilityClasses;
}

const PrimaryButton = ({
    children,
    classes,
    isActive,
    ...props
}: ButtonProps) => {
    return (
        <button
            type="button"
            className={twMerge(
                `${!isActive && "hover:bg-gray-200"}`,
                "text-grey",
                `${(isActive && "bg-gray-300") || "bg-white"}`,
                classes?.join(" ")
            )}
            {...props}
        >
            {children}
        </button>
    );
};

const InfoButton = ({ children, classes, isActive, ...props }: ButtonProps) => {
    const [hovered, setHovered] = useState(false);

    return (
        <button
            type="button"
            className={twMerge(
                `${!isActive && "hover:bg-gray-200"}`,
                "text-blue-400",
                `${
                    (hovered && "bg-gray-300") ||
                    (isActive && "bg-gray-200") ||
                    "bg-white"
                }`,
                classes?.join(" ")
            )}
            {...props}
        >
            {children}
        </button>
    );
};

const SuccessButton = ({
    children,
    classes,
    isActive,
    ...props
}: ButtonProps) => {
    const [hovered, setHovered] = useState(false);

    return (
        <button
            type="button"
            className={twMerge(
                `${!isActive && "hover:bg-gray-200"}`,
                "text-green-400",
                ` ${
                    (hovered && "bg-gray-300") ||
                    (isActive && "bg-gray-200") ||
                    "bg-white"
                }`,
                classes?.join(" ")
            )}
            {...props}
        >
            {children}
        </button>
    );
};

const WarnButton = ({ children, classes, isActive, ...props }: ButtonProps) => {
    const [hovered, setHovered] = useState(false);

    return (
        <button
            type="button"
            className={twMerge(
                `${!isActive && "hover:bg-gray-200"}`,
                "text-red-400",
                ` ${
                    (hovered && "bg-gray-300") ||
                    (isActive && "bg-gray-200") ||
                    "bg-white"
                }`,
                classes?.join(" ")
            )}
            {...props}
        >
            {children}
        </button>
    );
};

export default function Button({
    children,
    isActive,
    variant = "primary",
    ...props
}: ButtonProps) {
    const defaultClasses = [
        "transition-colors",
        "flex",
        "flex-col",
        "justify-center",
        "content-center",
        "rounded",
        `${padding2}`,
        `${margin1x}`,
    ];

    switch (variant) {
        case "primary":
            return (
                <PrimaryButton
                    classes={defaultClasses}
                    isActive={isActive}
                    {...props}
                >
                    {children}
                </PrimaryButton>
            );
        case "info":
            return (
                <InfoButton
                    classes={defaultClasses}
                    isActive={isActive}
                    {...props}
                >
                    {children}
                </InfoButton>
            );
        case "success":
            return (
                <SuccessButton
                    classes={defaultClasses}
                    isActive={isActive}
                    {...props}
                >
                    {children}
                </SuccessButton>
            );
        case "warn":
            return (
                <WarnButton
                    classes={defaultClasses}
                    isActive={isActive}
                    {...props}
                >
                    {children}
                </WarnButton>
            );
    }
    return <button type="button">{children}</button>;
}
