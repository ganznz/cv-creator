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
import Button from "../../../generic/Buttons/Button";

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
                onShrink={() => {
                    setActiveDropdown(null);
                    setTimeout(() => setActiveDropdown("primaryEducation"), 0);
                }}
            >
                {Object.keys(primaryEducation).map(
                    (primaryInstitutionName, index) => (
                        <DropdownItem key={index} name={primaryInstitutionName}>
                            {primaryInstitutionName}
                        </DropdownItem>
                    )
                )}
            </FormDropdown>

            <FormDropdown
                name="Tertiary Education"
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
                onShrink={() => {
                    setActiveDropdown(null);
                    setTimeout(
                        () => setActiveDropdown("secondaryEducation"),
                        0
                    );
                }}
            >
                {Object.keys(secondaryEducation).map(
                    (secondaryInstitutionName, index) => (
                        <DropdownItem
                            key={index}
                            name={secondaryInstitutionName}
                        >
                            {secondaryInstitutionName}
                        </DropdownItem>
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
                onShrink={() => {
                    setActiveDropdown(null);
                    setTimeout(() => setActiveDropdown("workExperience"), 0);
                }}
            >
                {Object.keys(workExperience).map(
                    (secondaryInstitutionName, index) => (
                        <DropdownItem
                            key={index}
                            name={secondaryInstitutionName}
                        >
                            {/* interaction btn container for the dropdown item */}
                            <div className="flex absolute right-0">
                                <Button
                                    variant="success"
                                    visibleHover={true}
                                    className="bg-transparent rounded-none"
                                >
                                    <i className="fa-solid fa-eye"></i>
                                </Button>
                                <Button
                                    variant="warn"
                                    visibleHover={true}
                                    className="bg-transparent rounded-none"
                                >
                                    <i className="fa-solid fa-trash"></i>
                                </Button>
                            </div>
                        </DropdownItem>
                    )
                )}
            </FormDropdown>
        </div>
    );
};
