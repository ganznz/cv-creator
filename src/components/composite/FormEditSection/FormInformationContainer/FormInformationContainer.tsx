import { useState } from "react";
import { PersonalDetailsContainer } from "./PersonalDetailsContainer/PersonalDetailsContainer";
import FormDropdown from "../../../generic/Dropdown/FormDropdown";
import DropdownItem from "../../../generic/Dropdown/DropdownItem";
import {
    PersonalDetails,
    PrimaryEducation,
    SecondaryEducation,
    WorkExperience,
} from "../../../../models/state-models";
import { produce } from "immer";

interface FormInformationContainerProps {
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

export const FormInformationContainer = ({
    personalDetails,
    primaryEducation,
    secondaryEducation,
    workExperience,
    setPersonalDetails,
    setPrimaryEducation,
    setSecondaryEducation,
    setWorkExperience,
}: FormInformationContainerProps) => {
    const [activeDropdown, setActiveDropdown] = useState<
        null | "primaryEducation" | "secondaryEducation" | "workExperience"
    >(null);

    return (
        <div className="flex flex-col w-full">
            {/* personal details form */}
            <PersonalDetailsContainer
                personalDetails={personalDetails}
                setPersonalDetails={setPersonalDetails}
            ></PersonalDetailsContainer>

            {primaryEducation && (
                <FormDropdown
                    name="Primary Education"
                    onClick={() =>
                        setActiveDropdown(
                            activeDropdown === "primaryEducation"
                                ? null
                                : "primaryEducation"
                        )
                    }
                    expanded={activeDropdown === "primaryEducation"}
                >
                    {Object.keys(primaryEducation).map(
                        (primaryInstitutionName) => (
                            <DropdownItem name={primaryInstitutionName} />
                        )
                    )}
                </FormDropdown>
            )}

            {secondaryEducation && (
                <FormDropdown
                    name="Secondary Education"
                    onClick={() =>
                        setActiveDropdown(
                            activeDropdown === "secondaryEducation"
                                ? null
                                : "secondaryEducation"
                        )
                    }
                    expanded={activeDropdown === "secondaryEducation"}
                >
                    {Object.keys(secondaryEducation).map(
                        (secondaryInstitutionName) => (
                            <DropdownItem name={secondaryInstitutionName} />
                        )
                    )}
                </FormDropdown>
            )}

            {workExperience && (
                <FormDropdown
                    name="Work Experience"
                    onClick={() =>
                        setActiveDropdown(
                            activeDropdown === "workExperience"
                                ? null
                                : "workExperience"
                        )
                    }
                    expanded={activeDropdown === "workExperience"}
                >
                    {Object.keys(workExperience).map(
                        (secondaryInstitutionName) => (
                            <DropdownItem name={secondaryInstitutionName} />
                        )
                    )}
                </FormDropdown>
            )}
        </div>
    );
};
