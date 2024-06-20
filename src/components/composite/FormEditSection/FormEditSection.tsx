import { useState } from "react";
import Navbar from "../../generic/Navbar/Navbar";
import Button from "../../generic/Buttons/Button";
import { FormInformationContainer } from "./FormInformationContainer/FormInformationContainer";
import { CustomizeContainer } from "./CustomizeContainer/CustomizeContainer";
import { gap6 } from "../../../utils/constants/tailwind-utility-classes";
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
    SecondaryEducationPlaceholderData2,
    WorkExperiencePlaceholderData,
    WorkExperiencePlaceholderData2,
} from "../../../placeholder-data/state-placeholder-data";
import { produce } from "immer";
import { v4 as uuidv4 } from "uuid";

interface FormEditSectionProps {
    personalDetails: PersonalDetails;
    primaryEducation: { [k: string]: PrimaryEducation };
    secondaryEducation: { [k: string]: SecondaryEducation };
    workExperience: { [k: string]: WorkExperience };
    resumeColours: string[];
    setPersonalDetails: React.Dispatch<React.SetStateAction<PersonalDetails>>;
    setPrimaryEducation: React.Dispatch<
        React.SetStateAction<{ [k: string]: PrimaryEducation }>
    >;
    setSecondaryEducation: React.Dispatch<
        React.SetStateAction<{ [k: string]: SecondaryEducation }>
    >;
    setWorkExperience: React.Dispatch<
        React.SetStateAction<{ [k: string]: WorkExperience }>
    >;
    setResumeDataVisibility: React.Dispatch<
        React.SetStateAction<{
            [k: string]: boolean;
        }>
    >;
    setResumeColours: React.Dispatch<React.SetStateAction<string[]>>;
}

export const FormEditSection = ({
    personalDetails,
    primaryEducation,
    secondaryEducation,
    workExperience,
    resumeColours,
    setPersonalDetails,
    setPrimaryEducation,
    setSecondaryEducation,
    setWorkExperience,
    setResumeDataVisibility,
    setResumeColours,
}: FormEditSectionProps) => {
    // remove form state of all their data
    const wipeAllForms = () => {
        setPersonalDetails(
            produce((draft) => {
                if (draft == null) return;
                (Object.keys(draft) as (keyof PersonalDetails)[]).forEach(
                    (key) => {
                        draft[key] = "";
                    }
                );
            })
        );
        setPrimaryEducation({});
        setSecondaryEducation({});
        setWorkExperience({});

        setResumeDataVisibility({});
    };

    // populate form state with placeholder data
    const populateAllForms = () => {
        setPersonalDetails(PersonalDetailsPlaceholderData);
        const primary1UUID = uuidv4();
        const secondary1UUID = uuidv4();
        const secondary2UUID = uuidv4();
        const workExperience1UUID = uuidv4();
        const workExperience2UUID = uuidv4();
        setPrimaryEducation({
            [primary1UUID]: PrimaryEducationPlaceholderData,
        });
        setSecondaryEducation({
            [secondary1UUID]: SecondaryEducationPlaceholderData,
            [secondary2UUID]: SecondaryEducationPlaceholderData2,
        });
        setWorkExperience({
            [workExperience1UUID]: WorkExperiencePlaceholderData,
            [workExperience2UUID]: WorkExperiencePlaceholderData2,
        });

        [
            primary1UUID,
            secondary1UUID,
            secondary2UUID,
            workExperience1UUID,
            workExperience2UUID,
        ].forEach((uuid) => {
            setResumeDataVisibility(
                produce((draft: { [k: string]: boolean }) => {
                    draft[uuid] = true;
                })
            );
        });
    };

    const [activePanel, setActiveWindow] = useState<"content" | "customize">(
        "content"
    );

    return (
        <div className={`h-full flex ${gap6}`}>
            <Navbar direction="vertical" className="self-start">
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
                <Navbar direction="horizontal" className="w-full">
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
                        <i className="fa-solid fa-trash"></i>
                        Clear Resume
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
                        setResumeDataVisibility={setResumeDataVisibility}
                    ></FormInformationContainer>
                )}
                {activePanel == "customize" && (
                    <CustomizeContainer
                        resumeColours={resumeColours}
                        setResumeColours={setResumeColours}
                    ></CustomizeContainer>
                )}
            </div>
        </div>
    );
};
