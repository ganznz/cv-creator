import React, { useEffect, useState } from "react";
import ExpandableDropdown, {
    ExpandableDropdownProps,
} from "./ExpandableDropdown";
import Form from "../Form/Form";
import Button from "../Buttons/Button";
import { DropdownItemProps } from "./DropdownItem";
import Input from "../Inputs/Input";

interface FormDropdownProps<T extends { [key: string]: any }>
    extends ExpandableDropdownProps {
    dropdownData: { [k: string]: T }; // all the data that is used for each <DropdownItem />'s form
    setDropdownData: React.Dispatch<React.SetStateAction<{ [k: string]: T }>>;
}

export default function FormDropdown<T extends { [key: string]: any }>({
    children,
    dropdownData,
    setDropdownData,
    ...props
}: FormDropdownProps<T>) {
    const [visibleForm, setVisibleForm] =
        useState<keyof typeof dropdownData>("");

    const isExpanded = { ...props }.expanded;

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
                    <Input label={dataKey} key={i} value={formData[dataKey]} />
                ))}
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
