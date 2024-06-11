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
    Timeline: "2016 - 2020",
    City: "Auckland",
    Country: "New Zealand",
    Details:
        "Proud to say that my time here was before the bathroom-vape epidemic!",
} as const;

export const SecondaryEducationPlaceholderData: SecondaryEducation = {
    Name: "University of Auckland",
    Qualification: "BSc, Computer Science",
    Timeline: "2022 - present",
    City: "Auckland",
    Country: "New Zealand",
    Details: "Specialising in Fullstack Software Development.",
} as const;

export const SecondaryEducationPlaceholderData2: SecondaryEducation = {
    Name: "Massey University",
    Qualification: "BConst, Construction",
    Timeline: "Feb 2021 - Nov 2021",
    City: "Auckland",
    Country: "New Zealand",
    Details:
        "Before I found programming and was still trying to figure out what I wanted to do, I picked up a Bachelor of Construction. I dropped it after the first year though after realising it wasn't for me.",
} as const;

export const WorkExperiencePlaceholderData: WorkExperience = {
    Name: "UoA Snowsports Club",
    ["Job Position"]: "Fullstack Developer",
    Timeline: "2002 - present",
    City: "Auckland",
    Country: "New Zealand",
    Details:
        "Working with a dozen other developers to create a web solution for the University of Auckland Snowsports Club (AUSC). Full-stack developer with slight emphasis on front-end development, focused on creating responsive and functional User Interface components using React, TypeScript, Tailwind, Storybook + other technologies.",
} as const;

export const WorkExperiencePlaceholderData2: WorkExperience = {
    Name: "Pimping Hoes",
    ["Job Position"]: "My Bedroom",
    Timeline: "2002 - present",
    City: "Auckland",
    Country: "New Zealand",
    Details:
        "I search one name, and end up seein' 20 tings. Nadine, Christine, Justine, Kathleen, Charlene, Pauline, Claudine. Man, I pack 'em in this phone like some sardines.",
} as const;
