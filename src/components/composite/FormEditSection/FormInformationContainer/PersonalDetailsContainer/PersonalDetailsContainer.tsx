import Form from "../../../../generic/Form/Form";
import Input from "../../../../generic/Inputs/Input";

export const PersonalDetailsContainer = () => {
    return (
        <Form className="flex flex-col gap-3">
            <h1 className="text-2xl font-bold italic">Personal Details</h1>
            <Input
                type="text"
                id="FullName"
                label="Full Name"
                description="recommended"
                placeholder="Guardian of the Forest"
            />
            <Input
                type="email"
                id="Email"
                label="Email"
                description="recommended"
                placeholder="lorax@whoville.com"
            />
            <Input
                type="tel"
                id="PhoneNumber"
                label="Phone Number"
                description="recommended"
                placeholder="+64 123 4567"
            />
            <Input
                type="text"
                id="Address"
                label="Address"
                description="recommended"
                placeholder="2 Lorax Lane, Whoville"
            />
        </Form>
    );
};
