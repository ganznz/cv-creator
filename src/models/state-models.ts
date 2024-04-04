export interface PersonalDetails {
    FirstName: string;
    LastName: string;
    Email?: string;
    PhoneNumber: string;
    Address: string;
}

interface GenericDetails {
    City: string;
    Country: string;
    Timeline: number | number[]; // e.g. 2022 (2022 - present) or [2011, 2014] (between 2011 to 2014)
    Details?: string;
}

export interface PrimaryEducation extends GenericDetails {
    InstituteName: string;
}

export interface SecondaryEducation extends PrimaryEducation {
    Qualification: string;
    Majors?: string[];
}

export interface WorkExperience extends GenericDetails {
    JobName: string;
    Workplace: string;
}

export interface PersonalSkill {
    Skill: string;
    Details: string;
}
