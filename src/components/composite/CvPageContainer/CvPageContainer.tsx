import {
    PersonalDetails,
    PrimaryEducation,
    SecondaryEducation,
    WorkExperience,
} from "../../../models/state-models";
import { CvPageHeader } from "./CvPageComponents/CvPageHeader";
import { CategoryHeader } from "./CvPageComponents/CategoryHeader";
import ExperienceInfo from "./CvPageComponents/ExperienceInfo";

interface CvPageContainerProps {
    personalDetails: PersonalDetails;
    primaryEducation: { [k: string]: PrimaryEducation };
    secondaryEducation: { [k: string]: SecondaryEducation };
    workExperience: { [k: string]: WorkExperience };
    resumeDataVisibility: {
        [k: string]: boolean;
    };
    resumeColours: string[];
}

export const CvPageContainer = ({
    personalDetails,
    primaryEducation,
    secondaryEducation,
    workExperience,
    resumeDataVisibility,
    resumeColours,
}: CvPageContainerProps) => {
    return (
        <div
            style={{ width: "calc(28cm * 0.707)", height: "28cm" }}
            className={`bg-white drop-shadow hover:drop-shadow-xl transition-all`}
        >
            {/* header */}
            <CvPageHeader
                personalDetails={personalDetails}
                primaryColour={resumeColours[0]}
                secondaryColour={resumeColours[1]}
            />

            {/* cv page content */}
            <div className="flex flex-col gap-8 p-12">
                {Object.keys(primaryEducation).length +
                    Object.keys(secondaryEducation).length >=
                    1 && (
                    <span className="flex flex-col gap-2">
                        <CategoryHeader
                            text="Education"
                            primaryColour={resumeColours[0]}
                            secondaryColour={resumeColours[1]}
                        ></CategoryHeader>

                        {/* primary education */}
                        {Object.keys(primaryEducation).length >= 1 && (
                            <h4 className="text-md font-bold italic">
                                Primary Education
                            </h4>
                        )}
                        <div className="flex flex-col gap-4">
                            {Object.entries(primaryEducation).map(
                                ([dataUUID, dataObj]) =>
                                    resumeDataVisibility[dataUUID] && (
                                        <ExperienceInfo
                                            key={dataUUID}
                                            infoType="primaryEducation"
                                            infoData={dataObj}
                                            metaInfoWidth={175}
                                        />
                                    )
                            )}
                        </div>

                        {/* tertiary education */}
                        {Object.keys(secondaryEducation).length >= 1 && (
                            <h4 className="text-md font-bold italic">
                                Tertiary Education
                            </h4>
                        )}
                        <div className="flex flex-col gap-4">
                            {Object.entries(secondaryEducation).map(
                                ([dataUUID, dataObj]) =>
                                    resumeDataVisibility[dataUUID] && (
                                        <ExperienceInfo
                                            key={dataUUID}
                                            infoType="secondaryEducation"
                                            infoData={dataObj}
                                            metaInfoWidth={175}
                                        />
                                    )
                            )}
                        </div>
                    </span>
                )}

                {Object.keys(workExperience).length >= 1 && (
                    <>
                        <CategoryHeader
                            text="Work Experience"
                            primaryColour={resumeColours[0]}
                            secondaryColour={resumeColours[1]}
                        ></CategoryHeader>
                        <div className="flex flex-col gap-4">
                            {Object.entries(workExperience).map(
                                ([dataUUID, dataObj]) =>
                                    resumeDataVisibility[dataUUID] && (
                                        <ExperienceInfo
                                            key={dataUUID}
                                            infoType="workExperience"
                                            infoData={dataObj}
                                            metaInfoWidth={175}
                                        />
                                    )
                            )}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};
