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
    Timeline: "2016 - 2020",
    Details:
        "Proud to say that my time here was before the bathroom-vape epidemic!",
} as const;

export const SecondaryEducationPlaceholderData: SecondaryEducation = {
    Name: "University of Auckland",
    City: "Auckland",
    Country: "New Zealand",
    Timeline: "2022 - present",
    Qualification: "Computer Science",
    Details: "Specialising in Fullstack Software Development.",
} as const;

export const WorkExperiencePlaceholderData: WorkExperience = {
    Name: "Pimping Hoes",
    City: "Auckland",
    Country: "New Zealand",
    Timeline: "2002 - present",
    Workplace: "My Bedroom",
    Details:
        "I search one name, and end up seein' 20 tings. Nadine, Christine, Justine, Kathleen, Charlene, Pauline, Claudine. Man, I pack 'em in this phone like some sardines",
} as const;
