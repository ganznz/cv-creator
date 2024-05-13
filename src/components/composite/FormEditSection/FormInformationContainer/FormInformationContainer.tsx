import { useState } from "react";
import Navbar from "../../../generic/Navbar/Navbar";
import Button from "../../../generic/Buttons/Button";
import { PersonalDetailsContainer } from "./PersonalDetailsContainer/PersonalDetailsContainer";
// interface FormInformationContainerProps {}

export const FormInformationContainer = () => {
    // "education", "experience"
    const [activeDropdown, setActiveDropdown] = useState(null);

    return (
        <div className="flex flex-col w-full">
            {/* dropdown component for EDUCATION and WORK EXP here (takes children <list item> components for each place of education/job) */}
            {/* clicking these <list item>'s will display <form /> component to edit information for that place */}
            <PersonalDetailsContainer></PersonalDetailsContainer>
        </div>
    );
};
