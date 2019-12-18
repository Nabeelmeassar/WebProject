export class Konferenzbeitraege {
    constructor(public id: number,
                public author: string,
                public title: string,
                public publisher: string,
                public chapter: number,
                public pages: number,
                public releaseDate: string,
                public theme: string
    ) {}
}
