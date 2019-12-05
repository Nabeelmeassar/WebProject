import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Mitglied} from '../model/mitglied';
import {Buch} from '../model/buch';
import {Lehrveranstaltung} from '../model/lehrveranstaltung';
import {Projekt} from '../model/projekt';

7
import {FilterPipe} from 'ngx-filter-pipe';

@Injectable({
    providedIn: 'root'
})
export class MitgliedServiceService {
    // hier is the arrays datentype form the classes
    public mitglied: Mitglied[] = [
        new Mitglied(1, 'Kai Petersen', 'C 206', 'kai.petersen@hs-flensburg.de', 'Prof. Dr. phil'),
        new Mitglied(2, 'Nabeel', 'C229', 'Meassar2222@hotmail.com', 'Student')

    ];
    public buecher: Buch[] = [
        new Buch(1, 'Nabeel', 'Jave', 'Hochshule Flensburg', '01-11-2019', 'jave'),
        new Buch(2, 'Nabeel', 'C#', 'Hochshule Flensburg', '01-11-2019', 'C#')
    ];
    public myLehrveranstaltung: Lehrveranstaltung[] = [
        new Lehrveranstaltung(1, 'Web Entwicklung ', 'Web Entwicklung mit Angular',
            'Prof: Pertersen', 'Web Entwicklung Entwicklung Entwicklung Entwicklung', 12),
        new Lehrveranstaltung(2, 'Web Entwicklung ', 'Web Entwicklung mit Angular',
            'Prof: Pertersen', 'Web Entwicklung Entwicklung Entwicklung Entwicklung', 12),
        new Lehrveranstaltung(3, 'java ', 'Web Entwicklung mit Angular',
            'Prof: Pertersen', 'Web Entwicklung Entwicklung Entwicklung Entwicklung', 12)
    ];
    public myProjekt: Projekt [] = [new Projekt(1, 'ProjektName', ' projekt Beschreibung ',
        'Nabeel Moahmmed Nabeel Moahmmed', 'Hochschule Flensburg'),
        new Projekt(1, 'Baustelle', ' projekt Beschreibung ',
            'Nabeel Moahmmed Nabeel Moahmmed', 'Hochschule Flensburg')];
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
        // const input = (e.target as HTMLInputElement).value;
        // console.log(input);
        // // const otherArray = [
        // //     input,
        // // ];
        // const filtered = mylist.filter(item => input.indexOf(item.name) > -1)
        // // console.log(filtered);
        // const filteredd = mylist.filter(x => input.includes(x.basename()));
        // console.log(filteredd);
        // console.log(input);
        // const reul =  this.filterPipe.transform(mylist, { projectName: input});
        // return  this.myProjekt.filter(projectName => input == mylist.projectName);
    }

    // input => Evaluation Ausdruck/Term
    //
    // x => x+3
    //
    // x= 5
    // 8

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
