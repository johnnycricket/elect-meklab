import {describe, it, beforeEach, expect} from 'vitest';

import { SRMClass, SRMTypeEnum } from './srm';
import { TechLvl } from '../../../../units/types/MiscRecordTypes';
import { GameSystem, GameTypeAbbrEnum, GameTypeEnum, PlayingFieldEnum } from "../../../../units/types/GameSystemType";

describe('srmclass tests', () => {
    let srm: SRMClass;
    let sys: GameSystem;

    beforeEach(() => {
        srm = new SRMClass();
        //sys.board = PlayingFieldEnum.HEX;
        sys.gametypeAbbr = GameTypeAbbrEnum.CBT;
        sys.gametype = GameTypeEnum.CBT;
        sys.board = PlayingFieldEnum.HEX;
    });

    it('should generate typical is lvl 1 srm4', () => {
        const actual = srm.genSRM(sys, TechLvl.ISONE, 4, SRMTypeEnum.NORMAL);

        expect(actual.size).toEqual(4);
        expect(actual.slots).toEqual(1);
        expect(actual.heat).toEqual(3);
    })
});
