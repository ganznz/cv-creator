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
    Name: "Takapuna Grammar School",
    City: "Auckland",
    Country: "New Zealand",
    Timeline: ["2016", "2020"],
} as const;

export const SecondaryEducationPlaceholderData: SecondaryEducation = {
    Name: "University of Auckland",
    City: "Auckland",
    Country: "New Zealand",
    Timeline: "2022",
    Qualification: "Computer Science",
} as const;

export const WorkExperiencePlaceholderData: WorkExperience = {
    Name: "Pimping Hoes",
    City: "Bucharest",
    Country: "Romania",
    Timeline: "2002",
    Workplace: "Hustlers University",
} as const;
