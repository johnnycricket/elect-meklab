export type InternalsPlacementsType = {
    place: LocationsEnum;
    slots: [
        '-Empty-',
        '-Empty-',
        '-Empty-',
        '-Empty-',
        '-Empty-',
        '-Empty-',
        '-Empty-',
        '-Empty-',
        '-Empty-',
        '-Empty-',
        '-Empty-',
        '-Empty-'
    ]
}

export enum LocationsEnum {
    LA = "Left Arm",
    RA = "Right Arm",
    LT = "Left Torso",
    RT = "Right Torso",
    CT = "Center Torso",
    LL = "Left Leg",
    RL = "Right Leg",
    RTL = "Rear Left Torso",
    RTR = "Rear Right Torso",
    RTC = "Rear Center Torso"
}