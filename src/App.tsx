import { useState, useEffect } from "react";
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
    SecondaryEducationPlaceholderData2,
    WorkExperiencePlaceholderData,
    WorkExperiencePlaceholderData2,
} from "./placeholder-data/state-placeholder-data";
import { FormEditSection } from "./components/composite/FormEditSection/FormEditSection";
import { CvPageContainer } from "./components/composite/CvPageContainer/CvPageContainer";
import { v4 as uuidv4 } from "uuid";
import { produce } from "immer";

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
        [uuidv4()]: SecondaryEducationPlaceholderData2,
    });

    const [workExperience, setWorkExperience] = useState<{
        [k: string]: WorkExperience;
    }>({
        [uuidv4()]: WorkExperiencePlaceholderData,
        [uuidv4()]: WorkExperiencePlaceholderData2,
    });

    // array stores UUIDs of data that is to be hidden/not visible on resume page
    const [resumeDataVisibility, setResumeDataVisibility] = useState<{
        [k: string]: boolean;
    }>({});

    // set visibility of all data to true (visible)
    useEffect(() => {
        [primaryEducation, secondaryEducation, workExperience].forEach(
            (obj) => {
                Object.keys(obj).map((dataUUID) => {
                    setResumeDataVisibility(
                        produce(
                            (draft: {
                                [k: keyof typeof primaryEducation]: boolean;
                            }) => {
                                draft[dataUUID] = true;
                            }
                        )
                    );
                });
            }
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
                setResumeDataVisibility={setResumeDataVisibility}
            ></FormEditSection>
            <CvPageContainer
                personalDetails={personalDetails}
                primaryEducation={primaryEducation}
                secondaryEducation={secondaryEducation}
                workExperience={workExperience}
                resumeDataVisibility={resumeDataVisibility}
            />
        </div>
    );
}

export default App;
