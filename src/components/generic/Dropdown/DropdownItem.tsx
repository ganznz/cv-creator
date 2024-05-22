import Button, { ButtonProps } from "../Buttons/Button";

export interface DropdownItemProps extends ButtonProps {
    name: string;
}

export default function DropdownItem({ name, ...props }: DropdownItemProps) {
    let classes = "flex";
    classes = { ...props }.className
        ? `${classes} ${{ ...props }.className}`
        : classes;

    return (
        <li className={classes}>
            <Button {...props}>{name}</Button>
        </li>
    );
}
