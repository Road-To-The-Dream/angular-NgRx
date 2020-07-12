import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import {RouterModule} from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PatientComponent } from './patient/patient.component';
import {FormsModule} from '@angular/forms';
import {baseReducers} from './ngrx/reducers';
import {PatientService} from "./services/patient.service";
import {HttpClientModule} from "@angular/common/http";
import {PatientsEffects} from "./ngrx/effects/patient.effect";

@NgModule({
  declarations: [
    AppComponent,
    PatientComponent
  ],
  imports: [
    RouterModule.forRoot([]),
    BrowserModule,
    StoreModule.forRoot(baseReducers),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
