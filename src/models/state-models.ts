export interface PersonalDetails {
    ["Full Name"]: string;
    Email?: string;
    ["Phone Number"]: string;
    Address: string;
}

interface GenericDetails {
    City: string;
    Country: string;
    Timeline: string;
    Details?: string;
}

export interface PrimaryEducation extends GenericDetails {
    Name: string;
}

export interface SecondaryEducation extends PrimaryEducation {
    Qualification: string;
}

export interface WorkExperience extends GenericDetails {
    Name: string;
    ["Job Position"]: string;
}

export interface PersonalSkill {
    Name: string;
    Details: string;
}
