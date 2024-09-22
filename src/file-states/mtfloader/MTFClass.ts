import { Mech } from "../../common/mech";

interface RetObj {
    chassis: string,
    model: string,
    mul: number,
    config: string,
    techbase: string,
    era: string,
    source: string,
    rules: string,
    role: string
    quirk: string[],
    mass: number,
    engine: string,
    structure: string,
    myomer: string,
    heatsinks: string,
    walk: number,
    run: number | undefined,
    jump: number | undefined,
    armortype: string,
    armor: [],
    arms: [],
    crits: {
        la: [],
        ra: [],
        lt: [],
        rt: [],
        ct: [],
        hd: [],
        ll: [],
        rl: [],
    }
}
export class MTFClass {
    private colonRegExp = new RegExp(/:/gi);
    private shallowRegExp = new RegExp(/(chassis)|(model)|(mul)|(config)|(techbase)|(era)|(source)|(rules)|(role)|(quirk)|(mass)|(engine)|(structure)|(myomer)|(heat sinks)|(walk)|(run)|(jump)/gi);
    private multilineOptions = ['Armor', 'Weapons', 'Left Arm', 'Right Arm', 'Left Torso', 'Right Torso', 'Center Torso', 'Head', 'Left Leg', 'Right Leg'];

    private singeLines(line: string): string[] {
        const isColon = String(line.match(this.colonRegExp));
        const keyvalTuple = ['', ''];

        if(isColon) {
            const splitString = line.split(':');
            const first = splitString[0];
            const second = splitString[1];
            
            keyvalTuple[0] = first ? first.trim() : '';
            keyvalTuple[1] = second ? second.trim() : '';
        }

        return keyvalTuple;
    }

    private multiLines(items: string[][]): string[][] {
        const multis = this.multilineOptions.filter((opt, i) => {
            let dist = 0;
            const multi = ['', []];
            const start = items.findIndex((item) => {
                return item[0] === opt;
            });
            const end = items.findIndex((item) => {
                return item[0] === this.multilineOptions[i+1];
            });
            dist = start;

            multi[0] = items;
            while( dist < end) {
                
            }

        });
        
        return;
    }

    private shallowPop(dataArray: string[][]): RetObj {
        const shallow: RetObj = {
            chassis: '',
            model: '',
            mul: 0,
            config: '',
            techbase: '',
            era: '',
            source: '',
            rules: '',
            role: '',
            quirk: [],
            mass: 0,
            engine: '',
            structure: '',
            myomer: '',
            heatsinks: '',
            walk: 0,
            run: 0,
            jump: 0,
            armortype: "",
            armor: [],
            arms: [],
            crits: {
                la: [],
                ra: [],
                lt: [],
                rt: [],
                ct: [],
                hd: [],
                ll: [],
                rl: []
            }
        };

        dataArray.filter((item) => {
            const found = item[0].match(this.shallowRegExp);
            const foundValue = item[1];
            const foundKey = found as unknown as keyof RetObj;
            if(found?.includes('quirk')) {
                shallow['quirk'].push(foundValue)
            } else {
                shallow[foundKey] = foundValue as never;
            }
        });

        return shallow;
    }

    public reader(contents: string): RetObj {
        //const firstPass = contents.split('\n');
        let firstPass = contents.replaceAll('\n', ',').split(',');
        firstPass = firstPass.filter((el) => {
            return el.length > 0;
        });
        const secondPass = firstPass.map((item) => {
            return this.singeLines(item);
        });

        const retObj = this.shallowPop(secondPass);

        const mutliChunks = this.multiLines(secondPass);
        
        return retObj;
    }

    public readerToType(contents: string): Mech {
        return new Mech;
    }

    public writer(path: string, blob: Mech): boolean {
        return true;
    }
}