import { ComponentProps } from "react";
import { TailwindUtilityClasses } from "../../types/GenericTypes";
import { twMerge } from "tailwind-merge";
import { padding2 } from "../../../constants/tailwind-utility-classes";

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
                `${
                    (!isActive || isActive == undefined) && "hover:bg-gray-200"
                } ${
                    ((isActive || isActive == undefined) && "bg-gray-300") ||
                    "bg-white"
                } text-grey`,
                classes?.join(" ")
            )}
            {...props}
        >
            {children}
        </button>
    );
};

const InfoButton = ({ children, classes, isActive, ...props }: ButtonProps) => {
    return (
        <button
            type="button"
            className={twMerge(
                `${
                    (!isActive || isActive == undefined) && "hover:bg-blue-200"
                } ${
                    ((isActive || isActive == undefined) && "bg-blue-100") ||
                    "bg-white"
                } text-blue-700`,
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
    return (
        <button
            type="button"
            className={twMerge(
                `${
                    (!isActive || isActive == undefined) && "hover:bg-green-200"
                } ${
                    ((isActive || isActive == undefined) && "bg-green-100") ||
                    "bg-white"
                } text-green-700`,
                classes?.join(" ")
            )}
            {...props}
        >
            {children}
        </button>
    );
};

const WarnButton = ({ children, classes, isActive, ...props }: ButtonProps) => {
    return (
        <button
            type="button"
            className={twMerge(
                `${
                    (!isActive || isActive == undefined) && "hover:bg-red-200"
                } ${
                    ((isActive || isActive == undefined) && "bg-red-100") ||
                    "bg-white"
                } text-red-700`,
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
    classes,
    ...props
}: ButtonProps) {
    const defaultClasses = [
        "flex",
        "flex-1",
        "justify-center",
        "content-center",
        "transition-colors",
        "rounded",
        `${padding2}`,
    ];
    classes = (classes && defaultClasses.concat(classes)) || defaultClasses;

    switch (variant) {
        case "primary":
            return (
                <PrimaryButton classes={classes} isActive={isActive} {...props}>
                    {children}
                </PrimaryButton>
            );
        case "info":
            return (
                <InfoButton classes={classes} isActive={isActive} {...props}>
                    {children}
                </InfoButton>
            );
        case "success":
            return (
                <SuccessButton classes={classes} isActive={isActive} {...props}>
                    {children}
                </SuccessButton>
            );
        case "warn":
            return (
                <WarnButton classes={classes} isActive={isActive} {...props}>
                    {children}
                </WarnButton>
            );
    }
}
