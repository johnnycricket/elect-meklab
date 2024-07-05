import { Children } from "react";

export function InternalSection() {
    
    return (
        <>
            <slot>
                {Children}
            </slot>
        </>
    )
}