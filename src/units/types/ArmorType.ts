export enum ArmorTypeEnum {
    "STANDARD" = 'Standard'
}

export type AmountUsedMaxTuple = [
    number,
    number
];

export type CBTBipedMechArmor = {
    armorType: ArmorTypeEnum;
    tonnage: number;
    armorFactor: number;
    LA: AmountUsedMaxTuple[];
    RA: AmountUsedMaxTuple[];
    LT: AmountUsedMaxTuple[];
    RT: AmountUsedMaxTuple[];
    CT: AmountUsedMaxTuple[];
    HD: AmountUsedMaxTuple[];
    LL: AmountUsedMaxTuple[];
    RL: AmountUsedMaxTuple[];
    RTL: AmountUsedMaxTuple[];
    RTR: AmountUsedMaxTuple[];
    RTC: AmountUsedMaxTuple[];
}

export type DestBipedMechArmor = {
    armorType: ArmorTypeEnum;
    tonnage: number;
    armorFactor: number;
    LA: AmountUsedMaxTuple[];
    RA: AmountUsedMaxTuple[];
    CT: AmountUsedMaxTuple[];
    LL: AmountUsedMaxTuple[];
    RL: AmountUsedMaxTuple[];
    RTC: AmountUsedMaxTuple[];
}