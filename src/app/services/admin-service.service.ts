import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Mitglied} from '../model/mitglied';
import {Buch} from '../model/buch';
import {Lehrveranstaltung} from '../model/lehrveranstaltung';
import {Projekt} from '../model/projekt';

import {FilterPipe} from 'ngx-filter-pipe';
import {Konferenzbeitraege} from '../model/konferenzbeiträge';
import {Journale} from '../model/journale';

@Injectable({
    providedIn: 'root'
})
export class AdminServiceService {
    // hier is the arrays datentype form the classes
    public mitglied: Mitglied[] = [
        new Mitglied(1, 'Kai Petersen', 'C 206', 'kai.petersen@hs-flensburg.de', 'Prof. Dr. phil'),
        new Mitglied(2, 'Nabeel', 'C229', 'Meassar2222@hotmail.com', 'Student')
    ];
    public buecher: Buch[] = [
        new Buch(1, 'Ali', 'Jave', 'Hochshule Flensburg', '01-11-2019', 'jave'),
        new Buch(2, 'Nabeel', 'C#', 'Hochshule Flensburg', '01-11-2019', 'C#')
    ];
    public myLehrveranstaltung: Lehrveranstaltung[] = [
        new Lehrveranstaltung(1, 'Web Entwicklung ', 'Web Entwicklung mit Angular', 'Prof: Pertersen', 'Beschreibung Web Entwicklung', 12),
        new Lehrveranstaltung(2, 'Web Entwicklung ', 'Web Entwicklung mit Angular', 'Prof: Pertersen', 'Beschreibung Web Entwicklung', 22),
        new Lehrveranstaltung(3, 'java ', 'Web Entwicklung mit Angular', 'Prof: Pertersen', 'Beschreibung Web Entwicklung', 32)
    ];
    public myProjekt: Projekt [] = [
        new Projekt(1, 'ProjektName', 'Projekt Beschreibung ', 'Max Meassar, Max Masterman', 'Hochschule Flensburg'),
        new Projekt(1, 'Baustelle', ' Projekt Beschreibung ', 'Nabeel Meassar, Max Masterman', 'Hochschule Flensburg')];
    public konferenzB: Konferenzbeitraege[] = [
        new Konferenzbeitraege(2, 'Max', 'title', 'Hochschule', 2, 3, '12.12.2019', 'Sport'),
        new Konferenzbeitraege(2, 'Max', 'title', 'Hochschule', 3, 3, '12.12.2019', 'Sport'),
        new Konferenzbeitraege(2, 'Max', 'title', 'Hochschule', 4, 3, '12.12.2019', 'Sport'),
        new Konferenzbeitraege(2, 'Max', 'title', 'Hochschule', 4, 3, '12.12.2019', 'Sport'),
    ];
    public journale: Journale[] = [
        new Journale(1, 'Journale title', 'Stadt Flensburg', '12.12.2019', 3),
        new Journale(1, 'Journale title', 'Hs Flensburg', '11.12.2019', 4),
        new Journale(1, 'Journale title', 'Stadt Flensburg', '23.12.2019', 35),
        new Journale(1, 'Journale title', 'Stadt Flensburg', '01.12.2019', 6)
    ];
    isLogin = false;

    constructor() {

    }

// this method to delele a array form anther component
    deleteDate(id: number, myList) {
        myList.splice(myList.indexOf(id), 1);
    }

    // this method return us true or not if true than can i use the method in the anther compnenten
    confirmMethod(name: string) {
        return confirm('Möchten Sie ' + name + ' hinzufügen');
    }

    search() {
        // tslint:disable-next-line:one-variable-per-declaration
        let input, filter, table, tr, td, i, txtValue;
        input = document.getElementById('suchen');
        filter = input.value.toUpperCase();
        table = document.getElementById('myTable');
        tr = table.getElementsByTagName('tr');
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName('td')[0];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = '';
                } else {
                    tr[i].style.display = 'none';
                }
            }
        }
    }

// logout methode
    logout() {
        this.isLogin = false;
    }

    // this methode raturn true i can't string
    nurNummer(event): boolean {
        const charCode = (event.which) ? event.which : event.nurNummer;
        return !(charCode > 31 && (charCode < 48 || charCode > 57));
    }
}
