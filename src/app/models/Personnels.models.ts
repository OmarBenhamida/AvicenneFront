import { User } from "./Users.models";

export class Personnel extends User {

    id: number;
    marticule: string;
    nom: string;
    prenom: string;
    cin: string;
    adresse: string;
    dateNaissance: string;
    lieuNaissance: string;
    sexe: string;
    dateEmbauche: string;
    nbrEnfant: number;
    securiteSocial: string;
    tel: string;
    intituleDiplome: string;
    situationFamiliale: string;
    img:any;

}
