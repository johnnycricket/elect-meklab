import { LocationsEnum } from "./InternalsPlacementsType";
import { TechLvl } from "./MiscRecordTypes";

export type WeaponsListType = {
    name: string;
    loc: LocationsEnum;
}

export type GenericQuad = [id: number, name: string, abbr: string, techNlvl: string];

export class WeaponClass {
    energy = <GenericQuad>[0, 'Small Laser', 'sl', TechLvl.ISONE];
    missile = <GenericQuad>[0, 'Short Range Missile Launcher 2', 'srm2', TechLvl.ISONE];
    ballistic = <GenericQuad>[0, 'Machine Gun', 'mg', TechLvl.ISONE];
    
}