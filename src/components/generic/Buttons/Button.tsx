import { MouseEventHandler, useState } from "react";
import {
    padding2,
    margin1x,
} from "../../../constants/tailwind-utility-classes";
import { TailwindUtilityClasses } from "../../types/GenericTypes";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
    children?: React.ReactNode;
    variant?: "primary" | "info" | "success" | "warn";
    props?: {
        isActive?: boolean;
        onClick?: MouseEventHandler<HTMLButtonElement>;
    };
    classes?: TailwindUtilityClasses;
}

const PrimaryButton = ({ children, props, classes }: ButtonProps) => {
    const [hovered, setHovered] = useState(false);

    return (
        <button
            type="button"
            className={twMerge(
                `text-gray-800 ${
                    (hovered && "bg-gray-200") ||
                    (props?.isActive && "bg-gray-300") ||
                    "bg-white"
                }`,
                classes?.join(" ")
            )}
            onClick={props?.onClick}
        >
            {children}
        </button>
    );
};

const InfoButton = ({ children, props, classes }: ButtonProps) => {
    const [hovered, setHovered] = useState(false);

    return (
        <button
            type="button"
            className={twMerge(
                `text-blue-400  ${
                    (hovered && "bg-gray-200") ||
                    (props?.isActive && "bg-gray-300") ||
                    "bg-white"
                }`,
                classes?.join(" ")
            )}
            onClick={props?.onClick}
        >
            {children}
        </button>
    );
};

const SuccessButton = ({ children, props, classes }: ButtonProps) => {
    const [hovered, setHovered] = useState(false);

    return (
        <button
            type="button"
            className={twMerge(
                `text-green-400  ${
                    (hovered && "bg-gray-200") ||
                    (props?.isActive && "bg-gray-300") ||
                    "bg-white"
                }`,
                classes?.join(" ")
            )}
            onClick={props?.onClick}
        >
            {children}
        </button>
    );
};

const WarnButton = ({ children, props, classes }: ButtonProps) => {
    const [hovered, setHovered] = useState(false);

    return (
        <button
            type="button"
            className={twMerge(
                `text-red-400 ${
                    (hovered && "bg-gray-200") ||
                    (props?.isActive && "bg-gray-300") ||
                    "bg-white"
                }`,
                classes?.join(" ")
            )}
            onClick={props?.onClick}
        >
            {children}
        </button>
    );
};

export default function Button({
    children,
    variant = "primary",
    props,
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
                <PrimaryButton props={props} classes={defaultClasses}>
                    {children}
                </PrimaryButton>
            );
        case "info":
            return <InfoButton props={props}>{children}</InfoButton>;
        case "success":
            return <SuccessButton props={props}>{children}</SuccessButton>;
        case "warn":
            return <WarnButton props={props}>{children}</WarnButton>;
    }
    return <button type="button">{children}</button>;
}
