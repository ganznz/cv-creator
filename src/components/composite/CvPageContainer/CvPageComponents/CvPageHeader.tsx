import { PersonalDetails } from "../../../../models/state-models";

interface CvPageHeaderProps {
    personalDetails: PersonalDetails;
}

export const CvPageHeader = ({ personalDetails }: CvPageHeaderProps) => {
    return (
        <header className="w-full bg-red-500 flex flex-col content-between text-center p-8">
            <h1 className="mb-6 italic font-bold text-4xl">
                {personalDetails["Full Name"]}
            </h1>
            <div className="flex justify-evenly gap-3">
                {personalDetails["Phone Number"] !== "" && (
                    <span className="flex gap-2 items-center">
                        <i className="fa-solid fa-phone"></i>
                        <h4>{personalDetails["Phone Number"]}</h4>
                    </span>
                )}
                {personalDetails.Email !== "" && (
                    <span className="flex gap-2 items-center">
                        <i className="fa-solid fa-envelope"></i>
                        <h4>{personalDetails.Email}</h4>
                    </span>
                )}
                {personalDetails.Address !== "" && (
                    <span className="flex gap-2 items-center">
                        <i className="fa-solid fa-house"></i>
                        <h4>{personalDetails.Address}</h4>
                    </span>
                )}
            </div>
        </header>
    );
};
