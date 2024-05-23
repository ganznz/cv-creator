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
import { FormEditSection } from "./components/composite/FormEditSection/FormEditSection";
import { CvPageContainer } from "./components/composite/CvPageContainer/CvPageContainer";

function App() {
    const [personalDetails, setPersonalDetails] = useState<PersonalDetails>(
        PersonalDetailsPlaceholderData
    );

    const [primaryEducation, setPrimaryEducation] = useState<{
        [k: string]: PrimaryEducation;
    }>({
        [PrimaryEducationPlaceholderData["Institute Name"]]:
            PrimaryEducationPlaceholderData,
    });

    const [secondaryEducation, setSecondaryEducation] = useState<{
        [k: string]: SecondaryEducation;
    }>({
        [SecondaryEducationPlaceholderData["Institute Name"]]:
            SecondaryEducationPlaceholderData,
    });

    const [workExperience, setWorkExperience] = useState<{
        [k: string]: WorkExperience;
    }>({
        [WorkExperiencePlaceholderData["Job Name"]]:
            WorkExperiencePlaceholderData,
    });

    return (
        <div className={`flex justify-center gap-10 p-7`}>
            <FormEditSection
                personalDetails={personalDetails}
                primaryEducation={primaryEducation}
                secondaryEducation={secondaryEducation}
                workExperience={workExperience}
                setPersonalDetails={setPersonalDetails}
                setPrimaryEducation={setPrimaryEducation}
                setSecondaryEducation={setSecondaryEducation}
                setWorkExperience={setWorkExperience}
            ></FormEditSection>
            <CvPageContainer>lorem ipsum</CvPageContainer>
        </div>
    );
}

export default App;
