import { useState } from "react";
import Navbar from "../../generic/Navbar/Navbar";
import Button from "../../generic/Buttons/Button";
import { FormInformationContainer } from "./FormInformationContainer/FormInformationContainer";
import { gap6 } from "../../../constants/tailwind-utility-classes";

export const FormEditSection = () => {
    // "content", "customize"
    const [activePanel, setActiveWindow] = useState("content");

    return (
        <div className={`h-full flex ${gap6} sticky top-[30px]`}>
            <Navbar direction="vertical" classes={["self-start"]}>
                <Button
                    isActive={activePanel == "content"}
                    onClick={() => setActiveWindow("content")}
                >
                    <span className="flex flex-col justify-center content-center">
                        <i className="fa-solid fa-user"></i>
                        Content
                    </span>
                </Button>
                <Button
                    isActive={activePanel == "customize"}
                    onClick={() => setActiveWindow("customize")}
                >
                    <span className="flex flex-col justify-center content-center">
                        <i className="fa-solid fa-close"></i>
                        Customize
                    </span>
                </Button>
            </Navbar>

            <div className={`w-[20rem] flex flex-col items-center ${gap6}`}>
                <Navbar direction="horizontal" classes={["w-full"]}>
                    <Button variant="success">Load Example</Button>
                    <Button variant="warn">
                        <span className="flex gap-2 justify-center content-center">
                            <i className="fa-solid fa-user"></i>
                            Clear Resume
                        </span>
                    </Button>
                </Navbar>

                {/* add content section here (edit personal details, education, experience, etc) */}
                {activePanel == "content" && (
                    <FormInformationContainer></FormInformationContainer>
                )}
            </div>
        </div>
    );
};
