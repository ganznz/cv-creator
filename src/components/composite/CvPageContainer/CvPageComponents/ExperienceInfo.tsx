import { ResumeDataType } from "../../../../utils/constants/types";
import {
    PrimaryEducation,
    SecondaryEducation,
    WorkExperience,
} from "../../../../models/state-models";

interface CategoryItemProps<T> {
    infoType: ResumeDataType;
    infoData: T;
    metaInfoWidth: number; // the section containing timeline & location information
}

// TYPE GUARD FUNCTIONS
function isPrimaryEducation(infoData: any): infoData is PrimaryEducation {
    return (infoData as PrimaryEducation).Name !== undefined;
}
function isSecondaryEducation(infoData: any): infoData is SecondaryEducation {
    return (infoData as SecondaryEducation).Qualification !== undefined;
}
function isWorkExperience(infoData: any): infoData is WorkExperience {
    return (infoData as WorkExperience)["Job Position"] !== undefined;
}

function PrimaryEducationInfo({
    infoData,
    metaInfoWidth,
}: CategoryItemProps<PrimaryEducation>) {
    return (
        <div className="flex gap-10">
            <div
                className={`flex flex-col text-right`}
                style={{ minWidth: `${metaInfoWidth}px` }} // inline styling cuz className doesnt accept dynamic class names :(
            >
                <p>{infoData.Timeline}</p>
                <p className="italic text-sm">{`${infoData.City}${
                    (infoData.City !== "" && infoData.Country !== "" && ",") ||
                    ""
                } ${infoData.Country}`}</p>
            </div>
            <div className="flex flex-col gap-1">
                <h4 className="text-lg font-bold">{infoData.Name}</h4>
                <p className="text-sm">{infoData.Details}</p>
            </div>
        </div>
    );
}

function SecondaryEducationInfo({
    infoData,
    metaInfoWidth,
}: CategoryItemProps<SecondaryEducation>) {
    return (
        <div className="flex gap-10">
            <div
                className={`flex flex-col text-right`}
                style={{ minWidth: `${metaInfoWidth}px` }}
            >
                <p>{infoData.Timeline}</p>
                <p className="italic text-sm">{`${infoData.City}${
                    (infoData.City !== "" && infoData.Country !== "" && ",") ||
                    ""
                } ${infoData.Country}`}</p>
            </div>
            <div className="flex flex-col gap-1">
                <h4 className="text-lg font-bold">{infoData.Name}</h4>
                <p className="italic">{infoData.Qualification}</p>
                <p className="text-sm">{infoData.Details}</p>
            </div>
        </div>
    );
}

function WorkExperienceInfo({
    infoData,
    metaInfoWidth,
}: CategoryItemProps<WorkExperience>) {
    return (
        <div className="flex gap-10">
            <div
                className={`flex flex-col text-right`}
                style={{ minWidth: `${metaInfoWidth}px` }}
            >
                <p>{infoData.Timeline}</p>
                <p className="italic text-sm">{`${infoData.City}${
                    (infoData.City !== "" && infoData.Country !== "" && ",") ||
                    ""
                } ${infoData.Country}`}</p>
            </div>
            <div className="flex flex-col gap-1">
                <h4 className="text-lg font-bold">{infoData.Name}</h4>
                <p className="italic">{infoData["Job Position"]}</p>
                <p className="text-sm">{infoData.Details}</p>
            </div>
        </div>
    );
}

export default function ExperienceInfo<T>({
    infoData,
    ...props
}: CategoryItemProps<T>) {
    switch ({ ...props }.infoType) {
        case "primaryEducation":
            if (isPrimaryEducation(infoData)) {
                return <PrimaryEducationInfo infoData={infoData} {...props} />;
            }
            break;
        case "secondaryEducation":
            if (isSecondaryEducation(infoData)) {
                return (
                    <SecondaryEducationInfo infoData={infoData} {...props} />
                );
            }
            break;
        case "workExperience":
            if (isWorkExperience(infoData)) {
                return <WorkExperienceInfo infoData={infoData} {...props} />;
            }
    }
    return null;
}
