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
import { gap6 } from "../../../../constants/tailwind-utility-classes";

interface FormInformationContainerProps {
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
        <div className={`flex flex-col w-full ${gap6}`}>
            {/* personal details form */}
            <PersonalDetailsContainer
                personalDetails={personalDetails}
                setPersonalDetails={setPersonalDetails}
            ></PersonalDetailsContainer>

            <FormDropdown
                name="Primary Education"
                icon={<i className="fa-solid fa-child"></i>}
                onClick={() =>
                    setActiveDropdown(
                        activeDropdown === "primaryEducation"
                            ? null
                            : "primaryEducation"
                    )
                }
                expanded={activeDropdown === "primaryEducation"}
                dropdownData={primaryEducation}
                setDropdownData={setPrimaryEducation}
            >
                {Object.keys(primaryEducation).map(
                    (primaryInstitutionName, index) => (
                        <DropdownItem
                            name={primaryInstitutionName}
                            key={index}
                        />
                    )
                )}
            </FormDropdown>

            <FormDropdown
                name="Secondary Education"
                icon={<i className="fa-solid fa-user-graduate"></i>}
                onClick={() =>
                    setActiveDropdown(
                        activeDropdown === "secondaryEducation"
                            ? null
                            : "secondaryEducation"
                    )
                }
                expanded={activeDropdown === "secondaryEducation"}
                dropdownData={secondaryEducation}
                setDropdownData={setSecondaryEducation}
            >
                {Object.keys(secondaryEducation).map(
                    (secondaryInstitutionName, index) => (
                        <DropdownItem
                            name={secondaryInstitutionName}
                            key={index}
                        />
                    )
                )}
            </FormDropdown>

            <FormDropdown
                name="Work Experience"
                icon={<i className="fa-solid fa-briefcase"></i>}
                onClick={() =>
                    setActiveDropdown(
                        activeDropdown === "workExperience"
                            ? null
                            : "workExperience"
                    )
                }
                expanded={activeDropdown === "workExperience"}
                dropdownData={workExperience}
                setDropdownData={setWorkExperience}
            >
                {Object.keys(workExperience).map(
                    (secondaryInstitutionName, index) => (
                        <DropdownItem
                            name={secondaryInstitutionName}
                            key={index}
                        />
                    )
                )}
            </FormDropdown>
        </div>
    );
};
