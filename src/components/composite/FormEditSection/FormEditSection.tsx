import { useState } from "react";
import Navbar from "../../generic/Navbar/Navbar";
import Button from "../../generic/Buttons/Button";
import { FormInformationContainer } from "./FormInformationContainer/FormInformationContainer";
import { gap6 } from "../../../constants/tailwind-utility-classes";
import {
    PersonalDetails,
    PrimaryEducation,
    SecondaryEducation,
    WorkExperience,
} from "../../../models/state-models";
import {
    PersonalDetailsPlaceholderData,
    PrimaryEducationPlaceholderData,
    SecondaryEducationPlaceholderData,
    WorkExperiencePlaceholderData,
} from "../../../placeholder-data/state-placeholder-data";

interface FormEditSectionProps {
    personalDetails: PersonalDetails | null;
    primaryEducation: { [k: string]: PrimaryEducation } | null;
    secondaryEducation: { [k: string]: SecondaryEducation } | null;
    workExperience: { [k: string]: WorkExperience } | null;
    setPersonalDetails: React.Dispatch<
        React.SetStateAction<PersonalDetails | null>
    >;
    setPrimaryEducation: React.Dispatch<
        React.SetStateAction<{ [k: string]: PrimaryEducation } | null>
    >;
    setSecondaryEducation: React.Dispatch<
        React.SetStateAction<{ [k: string]: SecondaryEducation } | null>
    >;
    setWorkExperience: React.Dispatch<
        React.SetStateAction<{ [k: string]: WorkExperience } | null>
    >;
}

export const FormEditSection = ({
    personalDetails,
    primaryEducation,
    secondaryEducation,
    workExperience,
    setPersonalDetails,
    setPrimaryEducation,
    setSecondaryEducation,
    setWorkExperience,
}: FormEditSectionProps) => {
    // remove form state of all their data
    const wipeAllForms = () => {
        setPersonalDetails(null);
        setPrimaryEducation(null);
        setSecondaryEducation(null);
        setWorkExperience(null);
    };

    // populate form state with placeholder data
    const populateAllForms = () => {
        setPersonalDetails(PersonalDetailsPlaceholderData);
        setPrimaryEducation({
            [PrimaryEducationPlaceholderData.InstituteName]:
                PrimaryEducationPlaceholderData,
        });
        setSecondaryEducation({
            [SecondaryEducationPlaceholderData.InstituteName]:
                SecondaryEducationPlaceholderData,
        });
        setWorkExperience({
            [WorkExperiencePlaceholderData.JobName]:
                WorkExperiencePlaceholderData,
        });
    };

    // "content", "customize"
    const [activePanel, setActiveWindow] = useState("content");

    return (
        <div className={`h-full flex ${gap6} sticky top-[30px]`}>
            <Navbar direction="vertical" classes={["self-start"]}>
                <Button
                    visibleHover={true}
                    isActive={activePanel == "content"}
                    onClick={() => setActiveWindow("content")}
                >
                    <span className="flex flex-col justify-center content-center">
                        <i className="fa-solid fa-user"></i>
                        Content
                    </span>
                </Button>
                <Button
                    visibleHover={true}
                    isActive={activePanel == "customize"}
                    onClick={() => setActiveWindow("customize")}
                >
                    <span className="flex flex-col justify-center content-center">
                        <i className="fa-solid fa-close"></i>
                        Customize
                    </span>
                </Button>
            </Navbar>

            <div className={`w-[20rem] flex flex-col items-center ${gap6}`}>
                <Navbar direction="horizontal" classes={["w-full"]}>
                    <Button
                        variant="success"
                        visibleHover={true}
                        onClick={populateAllForms}
                    >
                        Load Example
                    </Button>
                    <Button
                        variant="warn"
                        visibleBackground={true}
                        visibleHover={true}
                        onClick={wipeAllForms}
                    >
                        <span className="flex gap-2 justify-center content-center">
                            <i className="fa-solid fa-user"></i>
                            Clear Resume
                        </span>
                    </Button>
                </Navbar>

                {/* add content section here (edit personal details, education, experience, etc) */}
                {activePanel == "content" && (
                    <FormInformationContainer
                        personalDetails={personalDetails}
                        primaryEducation={primaryEducation}
                        secondaryEducation={secondaryEducation}
                        workExperience={workExperience}
                        setPersonalDetails={setPersonalDetails}
                        setPrimaryEducation={setPrimaryEducation}
                        setSecondaryEducation={setSecondaryEducation}
                        setWorkExperience={setWorkExperience}
                    ></FormInformationContainer>
                )}
            </div>
        </div>
    );
};
