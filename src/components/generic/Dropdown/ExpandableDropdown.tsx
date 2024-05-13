import Button from "../Buttons/Button";

interface ExpandableDropdownProps {
    children: React.ReactNode;
    icon?: React.ReactNode; // fontawesome <i> tag
    name: string;
    expanded: boolean;
    onExpand;
}

export default function ExpandableDropdown({
    children,
    icon,
    name,
    expanded,
    onExpand,
}: ExpandableDropdownProps) {
    return (
        <div>
            <Button onClick={onExpand}>
                {icon}
                <h1>{name}</h1>
            </Button>

            {expanded && (
                <div>
                    <ul>
                        {}
                        {/* children will be <li></li>'s */}
                    </ul>
                    {/* +ADD btn here, to add education / work experience to list */}
                </div>
            )}
        </div>
    );
}
