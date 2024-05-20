import Form from "../../../../generic/Form/Form";
import Input from "../../../../generic/Inputs/Input";
import { PersonalDetails } from "../../../../../models/state-models";
import { ChangeEvent } from "react";
import { produce } from "immer";

interface PersonalDetailsContainerProps {
    personalDetails: PersonalDetails;
    setPersonalDetails: React.Dispatch<React.SetStateAction<PersonalDetails>>;
}

export const PersonalDetailsContainer = ({
    personalDetails,
    setPersonalDetails,
}: PersonalDetailsContainerProps) => {
    /**
     *
     * @param e - ChangeEvent<HTMLInputElement>
     * @param id - the key to be updated in the personalDetails state
     */
    const updatePersonalDetails = (
        e: ChangeEvent<HTMLInputElement>,
        id: keyof PersonalDetails
    ) => {
        setPersonalDetails(
            produce((draft) => {
                if (draft == null) return;
                draft[id] = e.target.value;
            })
        );
    };

    return (
        <Form className="flex flex-col gap-3">
            <h1 className="text-2xl font-bold italic">Personal Details</h1>
            <Input
                type="text"
                id="FullName"
                label="Full Name"
                description="recommended"
                placeholder="Guardian of the Forest"
                value={personalDetails ? personalDetails["Full Name"] : ""}
                onChange={(e) => updatePersonalDetails(e, "Full Name")}
            />
            <Input
                type="email"
                id="Email"
                label="Email"
                description="recommended"
                placeholder="lorax@whoville.com"
                value={personalDetails ? personalDetails.Email : ""}
                onChange={(e) => updatePersonalDetails(e, "Email")}
            />
            <Input
                type="tel"
                id="PhoneNumber"
                label="Phone Number"
                description="recommended"
                placeholder="+64 123 4567"
                value={personalDetails ? personalDetails["Phone Number"] : ""}
                onChange={(e) => updatePersonalDetails(e, "Phone Number")}
            />
            <Input
                type="text"
                id="Address"
                label="Address"
                description="recommended"
                placeholder="2 Lorax Lane, Whoville"
                value={personalDetails ? personalDetails.Address : ""}
                onChange={(e) => updatePersonalDetails(e, "Address")}
            />
        </Form>
    );
};
