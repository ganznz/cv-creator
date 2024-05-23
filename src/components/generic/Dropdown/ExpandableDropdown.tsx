import Button from "../Buttons/Button";
import Panel from "../Panel";

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
        <Panel className="flex flex-col">
            <Button onClick={onClick}>
                {icon}
                <h1 className="font-bold text-xl">{name}</h1>
            </Button>

            {expanded && (
                <div className="mt-2">
                    <ul className="flex flex-col">{children}</ul>
                </div>
            )}
        </Panel>
    );
}
