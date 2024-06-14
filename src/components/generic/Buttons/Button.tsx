import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { padding2 } from "../../../utils/constants/tailwind-utility-classes";

export interface ButtonProps extends ComponentProps<"button"> {
    children?: React.ReactNode;
    variant?: "primary" | "info" | "success" | "warn";
    isActive?: boolean;
    visibleHover?: boolean;
    visibleBackground?: boolean;
}

const PrimaryButton = ({
    children,
    isActive,
    visibleHover,
    visibleBackground,
    className,
    ...props
}: ButtonProps) => {
    return (
        <button
            type="button"
            className={twMerge(
                `${(visibleHover && !isActive && "hover:bg-gray-200") || ""} ${
                    ((visibleBackground || isActive) && "bg-gray-300") ||
                    "bg-white"
                } text-grey`,
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
};

const InfoButton = ({
    children,
    isActive,
    visibleHover,
    visibleBackground,
    className,
    ...props
}: ButtonProps) => {
    return (
        <button
            type="button"
            className={twMerge(
                `${(visibleHover && !isActive && "hover:bg-blue-200") || ""} ${
                    ((visibleBackground || isActive) && "bg-blue-100") ||
                    "bg-white"
                } text-blue-700`,
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
};

const SuccessButton = ({
    children,
    isActive,
    visibleHover,
    visibleBackground,
    className,
    ...props
}: ButtonProps) => {
    return (
        <button
            type="button"
            className={twMerge(
                `${(visibleHover && !isActive && "hover:bg-green-300") || ""} ${
                    ((visibleBackground || isActive) && "bg-green-200") ||
                    "bg-white"
                } text-green-700`,
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
};

const WarnButton = ({
    children,
    isActive,
    visibleHover,
    visibleBackground,
    className,
    ...props
}: ButtonProps) => {
    return (
        <button
            type="button"
            className={twMerge(
                `${(visibleHover && !isActive && "hover:bg-red-200") || ""} ${
                    ((visibleBackground || isActive) && "bg-red-100") ||
                    "bg-white"
                } text-red-700`,
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
};

export default function Button({
    children,
    variant = "primary",
    isActive,
    visibleHover = false,
    visibleBackground = false,
    className,
    ...props
}: ButtonProps) {
    let classes = `flex flex-1 justify-center items-center gap-2 transition-colors rounded ${padding2} flex items-center`;
    classes = className ? twMerge(classes, className) : classes;

    switch (variant) {
        case "primary":
            return (
                <PrimaryButton
                    className={classes}
                    isActive={isActive}
                    visibleHover={visibleHover}
                    visibleBackground={visibleBackground}
                    {...props}
                >
                    {children}
                </PrimaryButton>
            );
        case "info":
            return (
                <InfoButton
                    className={classes}
                    isActive={isActive}
                    visibleHover={visibleHover}
                    visibleBackground={visibleBackground}
                    {...props}
                >
                    {children}
                </InfoButton>
            );
        case "success":
            return (
                <SuccessButton
                    className={classes}
                    isActive={isActive}
                    visibleHover={visibleHover}
                    visibleBackground={visibleBackground}
                    {...props}
                >
                    {children}
                </SuccessButton>
            );
        case "warn":
            return (
                <WarnButton
                    className={classes}
                    isActive={isActive}
                    visibleHover={visibleHover}
                    visibleBackground={visibleBackground}
                    {...props}
                >
                    {children}
                </WarnButton>
            );
    }
}
