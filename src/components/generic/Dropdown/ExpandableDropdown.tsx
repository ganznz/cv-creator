import Button from "../Buttons/Button";

export interface ExpandableDropdownProps {
    children: React.ReactNode;
    icon?: React.ReactNode; // fontawesome <i> tag
    name: string;
    expanded: boolean;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function ExpandableDropdown({
    children,
    icon,
    name,
    expanded,
    onClick,
}: ExpandableDropdownProps) {
    return (
        <div className="flex flex-col">
            <Button onClick={onClick}>
                {icon}
                <h1>{name}</h1>
            </Button>

            {expanded && (
                <div>
                    <ul className="flex flex-col">{children}</ul>
                </div>
            )}
        </div>
    );
}
