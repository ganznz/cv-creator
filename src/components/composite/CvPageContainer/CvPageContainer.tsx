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
}

export const CvPageContainer = ({
    personalDetails,
    primaryEducation,
    secondaryEducation,
}: // workExperience,
CvPageContainerProps) => {
    return (
        <div
            style={{ width: "calc(28cm * 0.707)", height: "28cm" }}
            className={`bg-white drop-shadow hover:drop-shadow-xl transition-all`}
        >
            {/* header */}
            <CvPageHeader personalDetails={personalDetails} />

            {/* cv page content */}
            <div className="flex flex-col gap-8 p-12">
                <span className="flex flex-col gap-2">
                    <CategoryHeader text="Education"></CategoryHeader>
                    <h4 className="text-md font-bold italic">
                        Primary Education
                    </h4>
                    {Object.entries(primaryEducation).map(
                        ([dataUUID, dataObj]) => (
                            <ExperienceInfo
                                key={dataUUID}
                                infoType="primaryEducation"
                                infoData={dataObj}
                                metaInfoWidth={175}
                            />
                        )
                    )}
                    <h4 className="text-md font-bold italic mt-7">
                        Tertiary Education
                    </h4>
                    {Object.entries(secondaryEducation).map(
                        ([dataUUID, dataObj]) => (
                            <ExperienceInfo
                                key={dataUUID}
                                infoType="secondaryEducation"
                                infoData={dataObj}
                                metaInfoWidth={175}
                            />
                        )
                    )}
                </span>

                <CategoryHeader text="Work Experience"></CategoryHeader>
            </div>
        </div>
    );
};
