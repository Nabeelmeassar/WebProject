import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MitgliedComponent } from './components/mitglied/mitglied.component';
const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'mitglied', component: MitgliedComponent },
    ];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MitgliedComponent
  ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
