import Button, { ButtonProps } from "../Buttons/Button";

export interface DropdownItemProps extends ButtonProps {
    name: string;
}

export default function DropdownItem({ name, ...props }: DropdownItemProps) {
    let classes = `flex -mx-2`;
    classes = { ...props }.className
        ? `${classes} ${{ ...props }.className}`
        : classes;

    return (
        <li className={classes}>
            <Button
                variant="info"
                className={`rounded-none`}
                visibleHover={true}
                {...props}
            >
                {name}
            </Button>
        </li>
    );
}
