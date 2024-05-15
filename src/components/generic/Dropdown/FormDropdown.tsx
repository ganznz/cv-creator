import ExpandableDropdown, {
    ExpandableDropdownProps,
} from "./ExpandableDropdown";

import Button from "../Buttons/Button";

interface FormDropdownProps extends ExpandableDropdownProps {}

export default function FormDropdown({
    children,
    ...props
}: FormDropdownProps) {
    return (
        <ExpandableDropdown {...props}>
            {children}
            <div className="flex justify-center items-center">
                <Button variant="success" visibleHover={true}>
                    <i className="fa-solid fa-plus"></i>
                    {{ ...props }.name}
                </Button>
            </div>
        </ExpandableDropdown>
    );
}
