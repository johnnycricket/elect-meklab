import RootNav from "../../../navigation/root-nav";
import { ArmorDiagram } from "./armor-diagram";
import { InternalDiagram } from "./internal-diagram";

export function ClassicLab() {                                  
    return (
        <>
            <RootNav page="lab-cbt" />
            <section>
                <p>Classic Btech Lab</p>
            </section>
            <section>
                <p>fluff and basic details</p>
                <p>pilot</p>
            </section>
            <section>
                <p>equipment</p>
            </section>
            <section>
                <ArmorDiagram></ArmorDiagram>
                <InternalDiagram></InternalDiagram>
            </section>
        </>
    )
}
 