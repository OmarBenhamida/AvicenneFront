import { Personnel } from "./Personnels.models";

export class Contrat {

    id: number;
    dateDebut: string;
    dateFin: string;
    typeContrat: string;
    dateSignature: string;

    idpersonnel: number;
    personnel : Personnel;
}
