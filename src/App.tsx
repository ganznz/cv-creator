import { useState } from "react";
import "./App.css";
import "./index.css";
import {
    PersonalDetails,
    PrimaryEducation,
    SecondaryEducation,
    WorkExperience,
} from "./models/state-models";
import {
    PersonalDetailsPlaceholderData,
    PrimaryEducationPlaceholderData,
    SecondaryEducationPlaceholderData,
    WorkExperiencePlaceholderData,
} from "./placeholder-data/state-placeholder-data";

function App() {
    const [personalDetails, setPersonalDetails] = useState<PersonalDetails>(
        PersonalDetailsPlaceholderData
    );
    const [primaryEducation, setPrimaryEducation] = useState<
        PrimaryEducation[]
    >([PrimaryEducationPlaceholderData]);

    const [secondaryEducation, setSecondaryEducation] = useState<
        SecondaryEducation[]
    >([SecondaryEducationPlaceholderData]);

    const [workExperience, setWorkExperience] = useState<WorkExperience[]>([
        WorkExperiencePlaceholderData,
    ]);

    return (
        <>
            <div className="bg-blue-500 text-white p-4">Hello</div>
            <div className="bg-blue-500 text-black p-4">Hello</div>
        </>
    );
}

export default App;
