import React from "react";
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

// type guard functions
function isPrimaryEducation(infoData: any): infoData is PrimaryEducation {
    return (infoData as PrimaryEducation).Name !== undefined;
}
function isSecondaryEducation(infoData: any): infoData is SecondaryEducation {
    return (infoData as SecondaryEducation).Qualification !== undefined;
}
function isWorkExperience(infoData: any): infoData is WorkExperience {
    return (infoData as WorkExperience).Workplace !== undefined;
}

function PrimaryEducationInfo({
    infoData,
    ...props
}: CategoryItemProps<PrimaryEducation>) {
    return (
        <div className="flex gap-4">
            <div></div>
            <div></div>
        </div>
    );
}

function SecondaryEducationInfo({
    infoData,
    ...props
}: CategoryItemProps<SecondaryEducation>) {
    return (
        <div className="flex gap-4">
            <div></div>
            <div></div>
        </div>
    );
}

function WorkExperienceInfo({
    infoData,
    ...props
}: CategoryItemProps<WorkExperience>) {
    return (
        <div className="flex gap-4">
            <div></div>
            <div></div>
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
