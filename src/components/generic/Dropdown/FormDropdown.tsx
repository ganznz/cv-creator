import React, { useState } from "react";
import ExpandableDropdown, {
    ExpandableDropdownProps,
} from "./ExpandableDropdown";
import Form from "../Form/Form";
import Button from "../Buttons/Button";
import { DropdownItemProps } from "./DropdownItem";

interface FormDropdownProps extends ExpandableDropdownProps {}

export default function FormDropdown({
    children,
    ...props
}: FormDropdownProps) {
    const [visibleForm, setVisibleForm] = useState("");

    // if visibleForm exists and expanded prop is true, show the form
    visibleForm && { ...props }.expanded && <Form></Form>;

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
