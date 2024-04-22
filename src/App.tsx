import { useState } from "react";
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

import { FormEditSection } from "./components/composite/FormEditContainer/FormEditContainer";

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
            <FormEditSection></FormEditSection>
        </>
    );
}

export default App;
