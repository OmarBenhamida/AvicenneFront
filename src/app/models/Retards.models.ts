import { Personnel } from "./Personnels.models";

export class Retard {

    id = null;
    dateRetard : string;
    type : boolean
    justification : string;
    nbrHeure : number;
    id_personnel: number;
    personnel: Personnel;
}
