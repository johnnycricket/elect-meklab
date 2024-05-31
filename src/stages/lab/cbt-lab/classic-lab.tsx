import RootNav from "../../../navigation/root-nav";
import { ArmorDiagram } from "./armor-diagram";

export function ClassicLab() {                                  
    return (
        <>
            <RootNav page="lab-cbt" />
            <section>
                <p>Classic Btech Lab</p>
            </section>
            <section>
                <ArmorDiagram></ArmorDiagram>
            </section>
        </>
    )
}
 