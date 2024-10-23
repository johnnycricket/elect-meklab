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
    'heat sinks': string,
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
    private shallowRegExp = new RegExp(/(chassis)|(model)|(mul)|(config)|(techbase)|(era)|(source)|(rules)|(role)|(quirk)|(mass)|^(engine)|(structure)|(myomer)|(heat sinks)|(walk)|(run)|(jump)$/gi);
    private multilineOptions = ['Armor', 'Weapons', 'Left Arm', 'Right Arm', 'Left Torso', 'Right Torso', 'Center Torso', 'Head', 'Left Leg', 'Right Leg'];
    private deepRegExp = new RegExp(/(armor)|(weapons)|(left arm)|(right arm)|(left torso)|(right torso)|(center torso)|(head)|(left leg)|(right leg)/gi);


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

    private multiLines(items: string[][]): (string | string[][])[][] {
        const collectedMultis: (string | string[][])[][] = [];
        this.multilineOptions.filter((opt, i) => {
            const start = items.findIndex((item) => {
                return item[0] === opt;
            });
            let end: number;

            if(opt === 'Weapons'){
                const skipAhead = parseInt(items[start + 1][1]) * 2;
                end = start + skipAhead;
            } else {
                end = items.findIndex((item) => {
                    return item[0] === this.multilineOptions[i+1];
                });
            }
            
            const collected = [];
            const count = start;

            while(count < end) {
                if(opt === 'Weapons') {
                    const weap = items[count][0];
                    const next = count + 1;
                    const loc = items[next][0]
                    collected.push([weap, loc]);
                    count + 2;
                } else {
                    collected.push(items[count]);
                }
                
            }
            collectedMultis.push([opt, collected]);
        });
        
        return collectedMultis;
    }

    private deepPop(dataArray: (string | string[][])[][]): Partial<RetObj> {
        const deep: Partial<RetObj> = {
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
        const armsArray: string[] = [];
        
        dataArray.filter((item) => {
            console.log(item)
            
            const zerozero = item[0] as string;
            const found = zerozero.match(this.deepRegExp) as string[];
            const foundValues = item[1];
            const foundKey = found[0].toLowerCase() as unknown as keyof RetObj;

            if(found?.includes('Armor')) {
                deep['armortype'] = foundValues[0][1];
                deep[foundKey] = foundValues as never;
            } else if(found?.includes('Weapons')) {
                deep['arms'] = foundValues as never;
            } else {
                deep[foundKey] = foundValues as never;
            }
        })
        
        return deep
    }

    private shallowPop(dataArray: string[][]): Partial<RetObj> {
        const shallow: Partial<RetObj> = {
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
            'heat sinks': '',
            walk: 0,
            run: 0,
            jump: 0,
        };
        const draftQuirks: string[] = [];

        dataArray.filter((item) => {
            const found = item[0].match(this.shallowRegExp);
            const foundValue = item[1];
            const foundKey = found?.toString().toLowerCase() as unknown as keyof RetObj;
            
            if(found?.includes('quirk')) {
                draftQuirks.push(foundValue)
            } else {
                shallow[foundKey] = foundValue as never;
            }
        });

        if(draftQuirks.length > 0) {
            shallow.quirk = draftQuirks;
        }

        return shallow;
    }

    public reader(contents: string): Partial<RetObj> {
        //const firstPass = contents.split('\n');
        let firstPass = contents.replaceAll('\n', ',').split(',');
        firstPass = firstPass.filter((el) => {
            return el.length > 0;
        });
        const secondPass = firstPass.map((item) => {
            return this.singeLines(item);
        });

        const firstResult = this.shallowPop(secondPass);
        const mutliChunks = this.multiLines(secondPass);
        const deepResult = this.deepPop(mutliChunks);

        const retObj = {...deepResult, ...firstResult};

        return retObj;
    }

    public readerToType(contents: string): Mech {
        return new Mech;
    }

    public writer(path: string, blob: Mech): boolean {
        return true;
    }
}