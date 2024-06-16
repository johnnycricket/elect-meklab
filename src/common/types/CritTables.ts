export interface MechCritTable {
    HD: string[];
    CT: string[];
    LT: string[];
    RT: string[];
    LA: string[];
    RA: string[];
    LL: string[];
    RL: string[];
}

export type CritEquipmentDetails = {
    name: string;
    slots: number;
    slotsRemaining: number;
    contiguous: boolean;
    group: boolean;
    groupCount: number;
}