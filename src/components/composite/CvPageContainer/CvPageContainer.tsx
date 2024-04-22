import { twMerge } from "tailwind-merge";
import { TailwindUtilityClasses } from "../../types/GenericTypes";

interface CvPageContainerProps {
    children: React.ReactNode;
    classes?: TailwindUtilityClasses;
}

export const CvPageContainer = ({
    children,
    classes,
}: CvPageContainerProps) => {
    const defaultClasses = ["bg-white", "drop-shadow"];

    return (
        <div
            style={{ width: "calc(16cm * 0.707)", height: "16cm" }}
            className={twMerge(classes, defaultClasses.join(" "))}
        >
            {children}
        </div>
    );
};
