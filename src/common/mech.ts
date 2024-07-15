import { Fluff } from "../fluff/fluff";
import { ArmorFactory } from "./armor-factory";
import { CriticalSlots } from "./critical-slots";
import { InternalsFactory } from "./internals-factory";
import { TonnageWatcher } from "./tonnage-watcher";

export class Mech {
    isQuad = false;
    internals = new InternalsFactory();
    crits = new CriticalSlots();
    armor = new ArmorFactory();
    equipment = [];
    tonnage = new TonnageWatcher();
    fluff = new Fluff();
}