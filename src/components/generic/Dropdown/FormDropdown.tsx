import React, { useEffect, useState } from "react";
import ExpandableDropdown, {
    ExpandableDropdownProps,
} from "./ExpandableDropdown";
import Form from "../Form/Form";
import Button from "../Buttons/Button";
import { DropdownItemProps } from "./DropdownItem";
import Input from "../Inputs/Input";

interface FormDropdownProps<T, K> extends ExpandableDropdownProps {
    dropdownData: Record<string, T>; // all the data that is used for each <DropdownItem />'s form
    setDropdownData: React.Dispatch<React.SetStateAction<{ [k: string]: K }>>;
}

export default function FormDropdown<T, K>({
    children,
    dropdownData,
    setDropdownData,
    ...props
}: FormDropdownProps<T, K>) {
    const [visibleForm, setVisibleForm] = useState("");

    const isExpanded = { ...props }.expanded;

    // visibleForm should only have a valid value if the dropdown is expanded
    useEffect(() => {
        !isExpanded && setVisibleForm("");
    }, [isExpanded]);

    const formData = dropdownData[visibleForm] || {};
    if (visibleForm) {
        return (
            <Form>
                {Object.keys(formData).map((dataKey, i) => (
                    <Input label={dataKey} key={i} />
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
            <div className="flex justify-center items-center">
                <Button variant="success" visibleHover={true}>
                    <i className="fa-solid fa-plus"></i>
                    {{ ...props }.name}
                </Button>
            </div>
        </ExpandableDropdown>
    );
}
