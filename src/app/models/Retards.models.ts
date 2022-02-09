import { Personnel } from "./Personnels.models";

export class Retard {

    id: number;
    dateRetard : string;
    type : boolean
    justification : string;
    nbrHeure : number;
    idpersonnel: number;
    personnel : Personnel;
}
