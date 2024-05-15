import { useState } from "react";
import { PersonalDetailsContainer } from "./PersonalDetailsContainer/PersonalDetailsContainer";
import FormDropdown from "../../../generic/Dropdown/FormDropdown";
import DropdownItem from "../../../generic/Dropdown/DropdownItem";

// interface FormInformationContainerProps {}

export const FormInformationContainer = () => {
    // "education", "experience"
    const [activeDropdown, setActiveDropdown] = useState<null | string>(null);

    return (
        <div className="flex flex-col w-full">
            {/* personal details form */}
            <PersonalDetailsContainer></PersonalDetailsContainer>

            {/* dropdown component for EDUCATION and WORK EXP here (takes children <list item> components for each place of education/job) */}
            {/* clicking these <list item>'s will display <form /> component to edit information for that place */}

            <FormDropdown
                name="Education"
                onClick={() =>
                    setActiveDropdown(
                        activeDropdown === "education" ? null : "education"
                    )
                }
                expanded={activeDropdown === "education"}
            >
                <DropdownItem name="Edu1" />
                <DropdownItem name="Edu2" />
                <DropdownItem name="Edu3" />
            </FormDropdown>

            <FormDropdown
                name="Experience"
                onClick={() =>
                    setActiveDropdown(
                        activeDropdown === "experience" ? null : "experience"
                    )
                }
                expanded={activeDropdown === "experience"}
            >
                <DropdownItem name="Exp1" />
                <DropdownItem name="Exp2" />
                <DropdownItem name="Exp3" />
            </FormDropdown>
        </div>
    );
};
