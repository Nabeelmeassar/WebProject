import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MitgliedComponent } from './components/mitglied/mitglied.component';
import { AddMitgliedComponent } from './Institutsmitglieder/add-mitglied/add-mitglied.component';
import { KonferenzbeitraegenComponent } from './components/konferenzbeitraegen/konferenzbeitraegen.component';
import { JournaleComponent } from './components/journale/journale.component';
import { ProjekteComponent } from './components/projekte/projekte.component';
import { LehrveranstaltungComponent } from './components/lehrveranstaltung/lehrveranstaltung.component';
import { BuecherComponent } from './components/buecher/buecher.component';
import {AdminHomeComponent} from './Institutsmitglieder/admin-home/admin-home.component';
import { MitgliedServiceService} from './services/mitglied-service.service';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'konferenzbeitraegen', component: KonferenzbeitraegenComponent },
    { path: 'journale', component: JournaleComponent },
    { path: 'projekte', component: ProjekteComponent },
    { path: 'lehrveranstaltung', component: LehrveranstaltungComponent },
    { path: 'buecher', component: BuecherComponent },
    { path: 'mitglied', component: MitgliedComponent },
    { path: 'addmitglied', component: AddMitgliedComponent },
    { path: 'admin/home', component: AdminHomeComponent },


];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MitgliedComponent,
    AddMitgliedComponent,
    KonferenzbeitraegenComponent,
    JournaleComponent,
    ProjekteComponent,
    LehrveranstaltungComponent,
    BuecherComponent,
      AdminHomeComponent
  ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
