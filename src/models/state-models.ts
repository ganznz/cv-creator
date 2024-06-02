export interface PersonalDetails {
    ["Full Name"]: string;
    Email?: string;
    ["Phone Number"]: string;
    Address: string;
}

interface GenericDetails {
    City: string;
    Country: string;
    Timeline: string | string[]; // e.g. 2022 (2022 - present) or [2011, 2014] (between 2011 to 2014)
    Details?: string;
}

export interface PrimaryEducation extends GenericDetails {
    ["Institute Name"]: string;
}

export interface SecondaryEducation extends PrimaryEducation {
    Qualification: string;
    Majors?: string[];
}

export interface WorkExperience extends GenericDetails {
    ["Job Name"]: string;
    Workplace: string;
}

export interface PersonalSkill {
    Skill: string;
    Details: string;
}
