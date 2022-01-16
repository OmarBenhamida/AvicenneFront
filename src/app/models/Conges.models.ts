import { Personnel } from "./Personnels.models";

export class Conge {

    id: number;
    dateDebut: string;
    dateFin: string;
    motif: string;
    etat: string;
    idpersonnel: number;
    personnel : Personnel;
}
