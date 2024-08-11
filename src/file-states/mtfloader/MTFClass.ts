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
        
    }

    public readerToType(contents: string) {

    }

    public writer(path: string, blob: Mech): boolean {
        return true;
    }
}