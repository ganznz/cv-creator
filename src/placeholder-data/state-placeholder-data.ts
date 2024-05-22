import {
    PersonalDetails,
    PrimaryEducation,
    SecondaryEducation,
    WorkExperience,
} from "../models/state-models";

export const PersonalDetailsPlaceholderData: PersonalDetails = {
    ["Full Name"]: "John Doe",
    Email: "johndoe@mail.com",
    ["Phone Number"]: "+64 12 345 6789",
    Address: "123 Main Street, Whoville",
} as const;

export const PrimaryEducationPlaceholderData: PrimaryEducation = {
    City: "Auckland",
    Country: "New Zealand",
    ["Institute Name"]: "Takapuna Grammar School",
    Timeline: [2016, 2020],
} as const;

export const SecondaryEducationPlaceholderData: SecondaryEducation = {
    City: "Auckland",
    Country: "New Zealand",
    ["Institute Name"]: "University of Auckland",
    Timeline: 2022,
    Qualification: "Computer Science",
} as const;

export const WorkExperiencePlaceholderData: WorkExperience = {
    City: "Bucharest",
    Country: "Romania",
    Timeline: 2002,
    Workplace: "Hustlers University",
    ["Job Name"]: "Big Time Pimpin'",
} as const;
