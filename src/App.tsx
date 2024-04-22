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
import { CvPageContainer } from "./components/composite/CvPageContainer/CvPageContainer";

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
        <div className={""}>
            <FormEditSection></FormEditSection>
            <CvPageContainer>lorem ipsum</CvPageContainer>
        </div>
    );
}

export default App;
