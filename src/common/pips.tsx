import { JSX } from "react/jsx-runtime";

export function Pips(
    loc: string,
    count: number | 0
): JSX.Element {
    const pipArray: JSX.Element[] = [];

    const allPips = (count: number) => {
        for(let i = 0; i <= count; i++){
            pipArray.push((
                <svg key={i} viewBox='0 0 10 10' xmlns="http://www.w3.org/2000/svg">
                    <circle cx='5' cy='5' r='5' />
                </svg>
            ))
        }
    }

    allPips(count);
    
    return (
        <>
            {pipArray.map(pip => pip)}
            {!count && (
                <span></span>
            )}
        </>
    )
}