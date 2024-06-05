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
    onAddListItem?: () => void;
}

export default function FormDropdown<T extends { [key: string]: any }>({
    children,
    dropdownData,
    setDropdownData,
    onShrink,
    onAddListItem,
    ...props
}: FormDropdownProps<T>) {
    const [visibleForm, setVisibleForm] =
        useState<keyof typeof dropdownData>("");

    const isExpanded = { ...props }.expanded;

    const updateDropdownData = (e: ChangeEvent<HTMLInputElement>, key: any) => {
        setDropdownData(
            produce((draft) => {
                // doing formData: T doesnt work - because of immer? ended up hardcoding type
                const formData: { [key: string]: any } = draft[visibleForm];
                if (formData) {
                    formData[key] = e.target.value;
                }
            })
        );
    };

    // visibleForm should only have a valid value if the dropdown is expanded
    // if visibleForm & formData exists, render form
    useEffect(() => {
        !isExpanded && setVisibleForm("");
    }, [isExpanded]);

    const formData: T = dropdownData[visibleForm];
    if (visibleForm && formData) {
        return (
            <Form className="flex flex-col gap-3">
                <Input
                    className="focus:ring-0 bg-transparent font-bold text-2xl"
                    value={formData["Name"]}
                    onChange={(e) => updateDropdownData(e, "Name")}
                />
                {Object.keys(formData)
                    .filter((key) => key !== "Name")
                    .map((dataKey: string, i) => (
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
                            const formName = child.props.dataUUID;
                            if (visibleForm == formName) return;
                            setVisibleForm(formName);
                        },
                    });
                }
            })}

            {/* add dropdown item btn */}
            <div className="flex justify-center items-center mt-2">
                <Button
                    variant="success"
                    visibleHover={true}
                    onClick={onAddListItem}
                >
                    <i className="fa-solid fa-plus"></i>
                    {{ ...props }.name}
                </Button>
            </div>
        </ExpandableDropdown>
    );
}
