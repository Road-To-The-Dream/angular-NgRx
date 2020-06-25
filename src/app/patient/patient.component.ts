import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {PatientModel} from "./patient.model";

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent {

  public patients: PatientModel[] = [
    {
      name: "Ivan",
      age: 22,
      date: Date.now()
    },
    {
      name: "Andrey",
      age: 25,
      date: Date.now()
    }
  ];

  public patientName = '';
  public patientAge = 1;

  constructor(private store: Store) { }

  addPatient() {
    // this.store.dispatch(addPatient({patient: {name: this.patientName, age: this.patientAge, date: Date.now()}}))
  }

  deletePatient() {

  }

}
