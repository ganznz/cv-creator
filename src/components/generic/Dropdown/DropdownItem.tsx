import Button, { ButtonProps } from "../Buttons/Button";

interface DropdownItemProps extends ButtonProps {
    name: string;
}

export default function DropdownItem({ name, ...props }: DropdownItemProps) {
    return (
        <li className="flex">
            <Button {...props}>{name}</Button>
        </li>
    );
}