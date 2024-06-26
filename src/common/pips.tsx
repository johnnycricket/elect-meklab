import { JSX } from "react/jsx-runtime";

type pipTypes = 'armor' | 'structure';

export function Pips(
    count: number | 0,
    type: pipTypes,
): JSX.Element {
    const pipArray: JSX.Element[] = [];

    const allPips = (count: number, type: pipTypes) => {

        for(let i = 0; i <= count; i++){
            pipArray.push((
                <svg key={i} viewBox='0 0 10 10' xmlns="http://www.w3.org/2000/svg">
                    <circle cx='5' cy='5' r='5' fill='none'/>
                </svg>
            ))
        }
    }

    allPips(count, type);
    
    return (
        <>
            {pipArray.map(pip => pip)}
            {!count && (
                <span></span>
            )}
        </>
    )
}