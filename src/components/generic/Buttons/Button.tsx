import { MouseEventHandler, useState } from "react";

interface ButtonProps {
    children?: React.ReactNode;
    variant?: "primary" | "info" | "success" | "warn";
    props?: {
        isActive?: boolean;
        onClick?: MouseEventHandler<HTMLButtonElement>;
    };
}

const PrimaryButton = ({ children, props }: ButtonProps) => {
    const [hovered, setHovered] = useState(false);

    return (
        <button
            type="button"
            className={`transition-colors flex justify-center content-center text-gray-800  ${
                (props?.isActive && "bg-gray-300") || "bg-white"
            }`}
            onClick={props?.onClick}
        >
            {children}
        </button>
    );
};

const InfoButton = ({ children, props }: ButtonProps) => {
    const [hovered, setHovered] = useState(false);

    return (
        <button
            type="button"
            className={`transition-colors flex justify-center content-center text-blue-400  ${
                (hovered && "bg-gray-300") ||
                (props?.isActive && "bg-gray-300") ||
                "bg-white"
            }`}
            onClick={props?.onClick}
        >
            {children}
        </button>
    );
};

const SuccessButton = ({ children, props }: ButtonProps) => {
    const [hovered, setHovered] = useState(false);

    return (
        <button
            type="button"
            className={`transition-colors flex justify-center content-center text-green-400  ${
                (hovered && "bg-gray-300") ||
                (props?.isActive && "bg-gray-300") ||
                "bg-white"
            }`}
            onClick={props?.onClick}
        >
            {children}
        </button>
    );
};

const WarnButton = ({ children, props }: ButtonProps) => {
    const [hovered, setHovered] = useState(false);

    return (
        <button
            type="button"
            className={`transition-colors flex justify-center content-center text-red-400 ${
                (hovered && "bg-gray-300") ||
                (props?.isActive && "bg-gray-300") ||
                "bg-white"
            }`}
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
    switch (variant) {
        case "primary":
            return <PrimaryButton props={props}>{children}</PrimaryButton>;
        case "info":
            return <InfoButton props={props}>{children}</InfoButton>;
        case "success":
            return <SuccessButton props={props}>{children}</SuccessButton>;
        case "warn":
            return <WarnButton props={props}>{children}</WarnButton>;
    }
    return <button type="button">{children}</button>;
}
