import { ComponentPropsWithoutRef } from "react";
import Panel from "../Panel";
import { padding4 } from "../../../constants/tailwind-utility-classes";

interface FormProps extends ComponentPropsWithoutRef<"form"> {
    children: React.ReactNode;
}

export default function Form({ children, ...props }: FormProps) {
    return (
        <Panel classes={[padding4]}>
            <form action="/" {...props}>
                {children}
            </form>
        </Panel>
    );
}
