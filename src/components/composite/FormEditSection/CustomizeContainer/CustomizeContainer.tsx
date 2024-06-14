import Panel from "../../../generic/Panel";
// import Button from "../../../generic/Buttons/Button";
import Input from "../../../generic/Inputs/Input";
import {
    gap6,
    padding4,
} from "../../../../utils/constants/tailwind-utility-classes";
import { ChangeEvent } from "react";
import { produce } from "immer";

interface CustomizeContainerProps {
    resumeColours: string[];
    setResumeColours: React.Dispatch<React.SetStateAction<string[]>>;
}

export const CustomizeContainer = ({
    resumeColours,
    setResumeColours,
}: CustomizeContainerProps) => {
    const changeResumeColours = (
        colourType: "primary" | "secondary",
        e: ChangeEvent<HTMLInputElement>
    ) => {
        setResumeColours(
            produce((draft) => {
                if (colourType == "primary") {
                    draft[0] = e.target.value;
                } else if (colourType == "secondary") {
                    draft[1] = e.target.value;
                }
            })
        );
    };

    return (
        <div className={`flex flex-col w-full ${gap6}`}>
            {/* colour customization container */}
            <Panel className={`${padding4}`}>
                <h1 className="text-2xl font-bold italic">Colours</h1>
                <div className="flex gap-5">
                    <Input
                        type="color"
                        label="Primary"
                        className="appearance-none border-none rounded-full h-10 w-10 p-0"
                        value={resumeColours[0]}
                        onChange={(e) => changeResumeColours("primary", e)}
                    />
                    <Input
                        type="color"
                        label="Secondary"
                        className="appearance-none border-none rounded-full h-10 w-10 p-0"
                        value={resumeColours[1]}
                        onChange={(e) => changeResumeColours("secondary", e)}
                    />
                </div>
            </Panel>

            {/* font customization container */}
        </div>
    );
};
