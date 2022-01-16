import { Personnel } from "./Personnels.models";
import { Post } from "./Posts.models";

export class Affectation {

    id: number;
    dateDebut: string;
    dateFin: string;
    idpost : number;
    idpersonnel : number;
    personnel : Personnel;
    post : Post
}
