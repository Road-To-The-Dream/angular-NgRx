import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent {

  public patients = [
    {
      name: "Ivan",
      age: "22",
      date: Date.now()
    },
    {
      name: "Andrey",
      age: "25",
      date: Date.now()
    }
  ];

  public patientName = '';
  public patientAge = 1;

  constructor() { }

  addPatient() {
  }

  deletePatient() {

  }

}
