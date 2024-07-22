import { TechLvl } from "../../../../units/types/MiscRecordTypes";
import { GameSystem, GameTypeAbbrEnum, GameTypeEnum, PlayingFieldEnum } from "../../../../units/types/GameSystemType";
import { GenericEquipmentType } from "../../../../units/types/EquipmentType";

export enum SRMTypeEnum {
    NORMAL = 'normal',
    STREAK = 'streak'
}

export interface SRMType extends GenericEquipmentType {
    gametype: GameSystem;
    tech: TechLvl;
    shortName: string;
    range: number[];
    damage: string;
    heat: number;
    size: number;
}

export class SRMClass {
    public srmObj: SRMType = {
        gametype: {
            gametype: GameTypeEnum.CBT,
            gametypeAbbr: GameTypeAbbrEnum.CBT,
            board: PlayingFieldEnum.HEX
        },
        tech: TechLvl.TECHUNK,
        shortName: "",
        range: [],
        damage: "",
        heat: 0,
        size: 0,
        id: 0,
        name: "",
        tonnage: 0,
        slots: 0,
        slotsRemaining: 0,
        contiguous: false
    }
    private getTonnage(size:number): number {
        switch (size) {
            case 6:
                return 3;
            case 4:
                return 2;
            default:
                return 1;
        } 
    }

    private getCritSize(size: number): number {
        switch (size) {
            case 6: 
                return 2;
            default: 
                return 1;
        }
    }

    private getHeatSize(size: number): number {
        switch (size) {
            case 6:
                return 4;
            case 4:
                return 3;
            default:
                return 2;
        }
    }

    private getName(type: SRMTypeEnum, size: number): string {
        switch (type) {
            case 'streak':
                return `streak short range missile launcher ${size}`;
            default:
                return `short range missile launcher ${size}`;
        }
    }

    private getShortName(type: SRMTypeEnum, size: number): string {
        switch (type) {
            case 'streak':
                return `ssrm-${size}`;
            default:
                return `srm-${size}`;
        }
    }

    public genSRM(system: GameSystem, tech: TechLvl, size: number, type: SRMTypeEnum): SRMType {
        const aSRM = this.srmObj;

        aSRM.contiguous = true;
        aSRM.tech = tech;
        aSRM.size = size;
        aSRM.slots = this.getCritSize(size);
        aSRM.slotsRemaining = this.getCritSize(size);
        aSRM.name = this.getName(type, size);
        aSRM.shortName = this.getShortName(type, size);
        aSRM.tonnage = this.getTonnage(size);
        aSRM.heat = this.getHeatSize(size);
        aSRM.damage = '2ml';
        aSRM.range = [0, 3, 6, 9];
        aSRM.gametype = system;

        return aSRM;
    }
}