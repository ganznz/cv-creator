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
import { v4 as uuidv4 } from "uuid";

function App() {
    const [personalDetails, setPersonalDetails] = useState<PersonalDetails>(
        PersonalDetailsPlaceholderData
    );

    const [primaryEducation, setPrimaryEducation] = useState<{
        [k: string]: PrimaryEducation;
    }>({
        [uuidv4()]: PrimaryEducationPlaceholderData,
    });

    const [secondaryEducation, setSecondaryEducation] = useState<{
        [k: string]: SecondaryEducation;
    }>({
        [uuidv4()]: SecondaryEducationPlaceholderData,
    });

    const [workExperience, setWorkExperience] = useState<{
        [k: string]: WorkExperience;
    }>({
        [uuidv4()]: WorkExperiencePlaceholderData,
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
            <CvPageContainer
                personalDetails={personalDetails}
                primaryEducation={primaryEducation}
                secondaryEducation={secondaryEducation}
                workExperience={workExperience}
            />
        </div>
    );
}

export default App;
