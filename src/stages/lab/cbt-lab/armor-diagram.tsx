import { ArmorSection } from "./armor-section";
import { Pips } from "../../../common/pips";

export function ArmorDiagram() {
    return (
        <section>
            <ArmorSection>
                <Pips count={0} type="armor"></Pips>
            </ArmorSection>
            <div>
                
           </div>
           <div>
                right arm
           </div>
        </section>
    )
}