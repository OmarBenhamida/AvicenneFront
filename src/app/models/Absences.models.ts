import { Personnel } from "./Personnels.models";

export class Absence {

    id: number;
    dateAbsence: string;
    type: boolean;
    justification: string;
    idpersonnel: number;
    personnel: Personnel;
}
