import { useState } from "react";
import Button from "../../../generic/Buttons/Button";
import { PersonalDetailsContainer } from "./PersonalDetailsContainer/PersonalDetailsContainer";
import ExpandableDropdown from "../../../generic/Dropdown/ExpandableDropdown";
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

            {/* LIST ITEM CHILDREN FOR THESE WILL BE THE ITEMS INSIDE OF THEIR RESPECTIVE STATE, MAP OVER THEM, AND WHEN THEY'RE CLICKED IT OPENS THE FORM BASED ON THE ID FOR THAT LIST ITEM */}
            <ExpandableDropdown
                name="Education"
                onExpand={() => setActiveDropdown("education")}
                expanded={activeDropdown === "education"}
            ></ExpandableDropdown>

            <ExpandableDropdown
                name="Experience"
                onExpand={() => setActiveDropdown("experience")}
                expanded={activeDropdown === "experience"}
            ></ExpandableDropdown>
        </div>
    );
};
