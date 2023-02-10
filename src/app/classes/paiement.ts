export class Paiement {
    constructor(
        public id:number,
        public nom:string,
        public prenom:string,
        public cin:number,
        public date:Date,
        public montant:number){}
}
