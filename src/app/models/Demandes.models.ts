import { Personnel } from "./Personnels.models";

export class Demande {

    id: number;
    dateDemande: string; //date systeme
    motif: string;
    statut: string;
    idpersonnel: number;
    personnel : Personnel;
}
