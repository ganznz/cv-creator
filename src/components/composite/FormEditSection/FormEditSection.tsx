import { useState } from "react";
import Navbar from "../../generic/Navbar/Navbar";
import Button from "../../generic/Buttons/Button";
import { FormInformationContainer } from "./FormInformationContainer/FormInformationContainer";
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
    };

    // populate form state with placeholder data
    const populateAllForms = () => {
        setPersonalDetails(PersonalDetailsPlaceholderData);
        setPrimaryEducation({
            [uuidv4()]: PrimaryEducationPlaceholderData,
        });
        setSecondaryEducation({
            [uuidv4()]: SecondaryEducationPlaceholderData,
            [uuidv4()]: SecondaryEducationPlaceholderData2,
        });
        setWorkExperience({
            [uuidv4()]: WorkExperiencePlaceholderData,
            [uuidv4()]: WorkExperiencePlaceholderData2,
        });
    };

    // "content", "customize"
    const [activePanel, setActiveWindow] = useState("content");

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
                        <span className="flex justify-center content-center">
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
