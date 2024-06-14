import { HTMLProps } from "react";
import { PersonalDetails } from "../../../../models/state-models";

interface CvPageHeaderProps extends HTMLProps<"div"> {
    personalDetails: PersonalDetails;
    primaryColour?: string;
    secondaryColour?: string;
}

export const CvPageHeader = ({
    personalDetails,
    primaryColour = "#000",
    secondaryColour = "#fff",
}: CvPageHeaderProps) => {
    return (
        <header
            style={{ backgroundColor: primaryColour }}
            className={`w-full flex flex-col content-between text-center p-8`}
        >
            <h1
                style={{ color: `${secondaryColour}` }}
                className="mb-6 italic font-bold text-4xl"
            >
                {personalDetails["Full Name"]}
            </h1>
            <div className="flex justify-evenly gap-3">
                {personalDetails["Phone Number"] !== "" && (
                    <span
                        style={{ color: secondaryColour }}
                        className="flex gap-2 items-center"
                    >
                        <i className="fa-solid fa-phone"></i>
                        <h4>{personalDetails["Phone Number"]}</h4>
                    </span>
                )}
                {personalDetails.Email !== "" && (
                    <span
                        style={{ color: secondaryColour }}
                        className="flex gap-2 items-center"
                    >
                        <i className="fa-solid fa-envelope"></i>
                        <h4>{personalDetails.Email}</h4>
                    </span>
                )}
                {personalDetails.Address !== "" && (
                    <span
                        style={{ color: secondaryColour }}
                        className="flex gap-2 items-center"
                    >
                        <i className="fa-solid fa-house"></i>
                        <h4>{personalDetails.Address}</h4>
                    </span>
                )}
            </div>
        </header>
    );
};
