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
import {
    PrimaryEducationPlaceholderData,
    SecondaryEducationPlaceholderData,
    WorkExperiencePlaceholderData,
} from "../../../../placeholder-data/state-placeholder-data";
import { gap6 } from "../../../../constants/tailwind-utility-classes";
import { produce } from "immer";
import { v4 as uuidv4 } from "uuid";
import Button from "../../../generic/Buttons/Button";

type ResumeDataType =
    | "primaryEducation"
    | "secondaryEducation"
    | "workExperience";

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
    const [activeDropdown, setActiveDropdown] = useState<null | ResumeDataType>(
        null
    );

    const createNewResumeData = (dataType: ResumeDataType) => {
        let setterFunc;
        let newDataName;
        let dataKeys;
        switch (dataType) {
            case "primaryEducation":
                setterFunc = setPrimaryEducation;
                newDataName = `Primary Education #${
                    Object.keys(primaryEducation).length + 1
                }`;
                dataKeys = Object.keys(
                    PrimaryEducationPlaceholderData
                ) as Array<keyof PrimaryEducation>;
                break;
            case "secondaryEducation":
                setterFunc = setSecondaryEducation;
                newDataName = `Tertiary Education #${
                    Object.keys(secondaryEducation).length + 1
                }`;
                dataKeys = Object.keys(
                    SecondaryEducationPlaceholderData
                ) as Array<keyof SecondaryEducation>;
                break;
            case "workExperience":
                setterFunc = setWorkExperience;
                newDataName = `Work Experience #${
                    Object.keys(workExperience).length + 1
                }`;
                dataKeys = Object.keys(WorkExperiencePlaceholderData) as Array<
                    keyof WorkExperience
                >;
                break;
        }

        setterFunc(
            produce((draft: { [k: string]: any }) => {
                const obj: any = {};
                console.log(dataKeys);
                for (let i = 0; i < dataKeys.length; i++) {
                    const key = dataKeys[i];
                    obj[dataKeys[i]] = key == "Name" ? newDataName : "";
                }

                draft[uuidv4()] = obj;
            })
        );
    };

    const deleteResumeData = (dataType: ResumeDataType, dataUUID: string) => {
        let setterFunc;
        switch (dataType) {
            case "primaryEducation":
                setterFunc = setPrimaryEducation;
                break;
            case "secondaryEducation":
                setterFunc = setSecondaryEducation;
                break;
            case "workExperience":
                setterFunc = setWorkExperience;
                break;
        }

        setterFunc(
            produce((draft: { [k: string]: any }) => {
                delete draft[dataUUID];
            })
        );
    };

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
                onAddListItem={() => createNewResumeData("primaryEducation")}
            >
                {Object.keys(primaryEducation).map((dataUUID, index) => (
                    <DropdownItem
                        key={index}
                        dataUUID={dataUUID}
                        name={primaryEducation[dataUUID].Name}
                    >
                        {/* interaction btn container for the dropdown item */}
                        <div className="flex absolute right-0 gap-2">
                            <Button
                                variant="success"
                                visibleHover={true}
                                className="bg-transparent rounded-full"
                            >
                                <i className="fa-solid fa-eye"></i>
                            </Button>
                            <Button
                                variant="warn"
                                visibleHover={true}
                                className="bg-transparent rounded-full"
                                onClick={() =>
                                    deleteResumeData(
                                        "primaryEducation",
                                        dataUUID
                                    )
                                }
                            >
                                <i className="fa-solid fa-trash"></i>
                            </Button>
                        </div>
                    </DropdownItem>
                ))}
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
                onAddListItem={() => createNewResumeData("secondaryEducation")}
            >
                {Object.keys(secondaryEducation).map((dataUUID, index) => (
                    <DropdownItem
                        key={index}
                        dataUUID={dataUUID}
                        name={secondaryEducation[dataUUID].Name}
                    >
                        {/* interaction btn container for the dropdown item */}
                        <div className="flex absolute right-0 gap-2">
                            <Button
                                variant="success"
                                visibleHover={true}
                                className="bg-transparent rounded-full"
                            >
                                <i className="fa-solid fa-eye"></i>
                            </Button>
                            <Button
                                variant="warn"
                                visibleHover={true}
                                className="bg-transparent rounded-full"
                                onClick={() =>
                                    deleteResumeData(
                                        "secondaryEducation",
                                        dataUUID
                                    )
                                }
                            >
                                <i className="fa-solid fa-trash"></i>
                            </Button>
                        </div>
                    </DropdownItem>
                ))}
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
                onAddListItem={() => createNewResumeData("workExperience")}
            >
                {Object.keys(workExperience).map((dataUUID, index) => (
                    <DropdownItem
                        key={index}
                        dataUUID={dataUUID}
                        name={workExperience[dataUUID].Name}
                    >
                        {/* interaction btn container for the dropdown item */}
                        <div className="flex absolute right-0 gap-2">
                            <Button
                                variant="success"
                                visibleHover={true}
                                className="bg-transparent rounded-full"
                            >
                                <i className="fa-solid fa-eye"></i>
                            </Button>
                            <Button
                                variant="warn"
                                visibleHover={true}
                                className="bg-transparent rounded-full"
                                onClick={() =>
                                    deleteResumeData("workExperience", dataUUID)
                                }
                            >
                                <i className="fa-solid fa-trash"></i>
                            </Button>
                        </div>
                    </DropdownItem>
                ))}
            </FormDropdown>
        </div>
    );
};
