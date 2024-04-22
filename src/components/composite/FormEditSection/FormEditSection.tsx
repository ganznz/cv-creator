import { useState } from "react";
import Navbar from "../Navbar";
import Button from "../../generic/Buttons/Button";

export const FormEditSection = () => {
    // "content", "customize"
    const [activePanel, setActiveWindow] = useState("content");

    return (
        <>
            <Navbar>
                <Button
                    props={{
                        isActive: activePanel == "content",
                        onClick: () => setActiveWindow("content"),
                    }}
                >
                    <i className="fa-solid fa-user"></i>
                    Content
                </Button>
                <Button
                    props={{
                        isActive: activePanel == "customize",
                        onClick: () => setActiveWindow("customize"),
                    }}
                >
                    <i className="fa-solid fa-close"></i>
                    Customize
                </Button>
            </Navbar>

            {/* add content section here (edit personal details, education, experience, etc) */}
        </>
    );
};
