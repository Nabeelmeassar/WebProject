export class Lehrveranstaltung {
    constructor(public id: number ,
                public lehrName: string ,
                public theme: string,
                public lehrende: string,
                public beschreibung: string,
                public teilnahmeConter: number) {}
}
