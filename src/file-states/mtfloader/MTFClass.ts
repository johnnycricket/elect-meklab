import { Mech } from "../../common/mech";

export class MTFClass {
    private colonRegExp = new RegExp(/:/gi);
    private commaRegExp = new RegExp(/,/gi);

    private singeLines(line: string): string[] {
        const isColon = line.match(this.colonRegExp);
        const isComma = line.match(this.commaRegExp);
        const keyvalTuple = ['', ''];

        if(isColon) {
            const splitString = line.split(':');
            keyvalTuple[0] = splitString[0];
            keyvalTuple[1] = splitString[1];
        }

        if(isComma) {
            const splitString = line.split(':');
            keyvalTuple[0] = splitString[0];
            keyvalTuple[1] = splitString[1];
        }

        return keyvalTuple;
    }

    private multiLines(lines: string): string[] {
        const isColon = lines.match(this.colonRegExp);
        const isComma = lines.match(this.commaRegExp);
        const keyvalTuple = ['', ''];

        return keyvalTuple
    }

    public reader(contents: string) {
        const multilineOptions = ['Armor', 'Weapons', 'Left Arm', 'Right Arm', 'Left Torso', 'Right Torso', 'Center Torso', 'Head', 'Left Leg', 'Right Leg'] 
        const retObj = {};  //currently arbitrary because could be any kind of unit except vehicles and some battle armor.
        const firstPass = contents.split('\n');
        const secondPass = firstPass.filter((line) => {
            if(line !== '') { return }
        });

        secondPass.forEach((line, i) => {
            const lineSplit = line.split(':');
            if(multilineOptions.includes(lineSplit[0])) {
                this.multiLines()
            }
        })
        
        
    }

    public readerToType(contents: string) {

    }

    public writer(path: string, blob: Mech): boolean {
        return true;
    }
}