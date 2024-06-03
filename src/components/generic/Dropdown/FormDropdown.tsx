import React, { ChangeEvent, useEffect, useState } from "react";
import ExpandableDropdown, {
    ExpandableDropdownProps,
} from "./ExpandableDropdown";
import Form from "../Form/Form";
import Button from "../Buttons/Button";
import { DropdownItemProps } from "./DropdownItem";
import Input from "../Inputs/Input";
import { produce } from "immer";

interface FormDropdownProps<T extends { [key: string]: any }>
    extends ExpandableDropdownProps {
    dropdownData: { [k: string]: T }; // all the data that is used for each <DropdownItem />'s form
    setDropdownData: React.Dispatch<React.SetStateAction<{ [k: string]: T }>>;
    onShrink?: () => void;
}

export default function FormDropdown<T extends { [key: string]: any }>({
    children,
    dropdownData,
    setDropdownData,
    onShrink,
    ...props
}: FormDropdownProps<T>) {
    const [visibleForm, setVisibleForm] =
        useState<keyof typeof dropdownData>("");

    const isExpanded = { ...props }.expanded;

    const updateDropdownData = (e: ChangeEvent<HTMLInputElement>, key: any) => {
        setDropdownData(
            produce((draft) => {
                // for some reason doing formData: T doesnt work - must be because of immer? so i just hardcoded the type
                const formData: { [key: string]: any } = draft[visibleForm];
                if (formData) {
                    formData[key] = e.target.value;
                }
            })
        );
    };

    // visibleForm should only have a valid value if the dropdown is expanded
    useEffect(() => {
        !isExpanded && setVisibleForm("");
    }, [isExpanded]);

    const formData: T = dropdownData[visibleForm];
    if (visibleForm && formData) {
        return (
            <Form className="flex flex-col gap-3">
                <h1 className={"text-xl font-bold"}>{visibleForm}</h1>
                {Object.keys(formData).map((dataKey: string, i) => (
                    <Input
                        label={dataKey}
                        key={i}
                        value={formData[dataKey]}
                        onChange={(e) => updateDropdownData(e, dataKey)}
                    />
                ))}
                <Button
                    className="mt-5"
                    variant="success"
                    visibleBackground={true}
                    visibleHover={true}
                    onClick={onShrink}
                >
                    Back
                </Button>
            </Form>
        );
    }

    // else, render dropdown
    return (
        <ExpandableDropdown {...props}>
            {React.Children.map(children, (child) => {
                if (React.isValidElement<DropdownItemProps>(child)) {
                    return React.cloneElement(child, {
                        onClick: () => {
                            if (visibleForm == child.props.name) return;
                            setVisibleForm(child.props.name);
                        },
                    });
                }
            })}
            <div className="flex justify-center items-center mt-2">
                <Button variant="success" visibleHover={true}>
                    <i className="fa-solid fa-plus"></i>
                    {{ ...props }.name}
                </Button>
            </div>
        </ExpandableDropdown>
    );
}
