import { engineWeightTable } from "../units/types/EngineConstants";

enum engineTypes {
    'NORMAL' = 'Normal',
    'L' = 'Light',
    'XL' = 'Extralight',
    'XXL' = 'Extra Extralight',
    'P' = 'Primitive',
    'ICE' = 'Internal Combustion',
    'C' = 'Compact'
}

type locInternalTuple = [
    string,
    number
]

export class EngineFactory {
    walking = 0;
    running = 0;
    rating = 0;
    type: engineTypes = engineTypes.NORMAL;
    engineWeight = 0;
    engineHS = [0, 0];
    engineInternals: locInternalTuple[] = [['center', 1]]

    private checkEngineWeight(rating: number): number {
        let engineTonnage = 0;

        engineWeightTable.

        return engineTonnage;
    }

    private ratingMath(walking: number, tonnage: number): void {
        this.rating = Math.round(tonnage * walking);
        if(this.rating > 400 || this.rating < 10) {
            //need builder error handler...
            console.log('engine rating cannot below 10 or above 400');
        }
        this.engineWeight = checkEngineWeight(rating);
    }

    private runningMath(walking: number): void {
        this.running = Math.round(walking * 1.5);
    }

    private engineHeatSinkMath(rating: number): void {
        const min = 10;
        const internal = Math.round(rating / 25);
        if (internal < min) {
            this.engineHS[0] = internal;
            this.engineHS[1] = min - internal;
        }
    }

    private engineInteralsGenerator(type: engineTypes, tech: string): void {

    }

    public get getWalking() {
        return this.walking;
    }

    public get getRunning() {
        return this.running;
    }

    public get getRating() {
        return this.type;
    }

    public get getType() {
        return this.type;
    }

    public get getEngineHS() {
        return this.engineHS;
    }

    public get getEngineInterals() {
        return this.engineInternals;
    }

    public set calculateEngine(walk: number, type: engineTypes) {
        
    }
}