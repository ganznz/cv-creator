import Navbar from "../../../generic/Navbar/Navbar";
import Button from "../../../generic/Buttons/Button";

// interface FormInformationContainerProps {}

export const FormInformationContainer = () => {
    return (
        <div className="flex flex-col">
            <Navbar>
                <Button variant="success" props={{ onClick: () => {} }}>
                    Load Example
                </Button>
                <Button variant="warn" props={{ onClick: () => {} }}>
                    <i className="fa-solid fa-user"></i>
                    Clear Resume
                </Button>
            </Navbar>

            {/* dropdown component for education here (takes children <list item> components for each different school) */}
            {/* clicking these <list item>'s will display <form /> component to edit information for that school */}
        </div>
    );
};
