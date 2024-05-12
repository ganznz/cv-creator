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
import { FormEditSection } from "./components/composite/FormEditContainer/FormEditSection";
import { CvPageContainer } from "./components/composite/CvPageContainer/CvPageContainer";
import { gap6 } from "./constants/tailwind-utility-classes";

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
        <div className={`flex justify-evenly ${gap6}`}>
            <FormEditSection></FormEditSection>
            <CvPageContainer>lorem ipsum</CvPageContainer>
        </div>
    );
}

export default App;
