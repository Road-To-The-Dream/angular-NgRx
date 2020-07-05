import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {patientAdd, patientDelete} from '../ngrx/actions/patients.action';
import * as PatientsSelectors from '../ngrx/selectors/patient.selector';
import {PatientModel} from './patient.model';
import {Observable} from "rxjs";

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  public patients: PatientModel[] = [];
  public patientName = '';
  public patientAge = 1;

  protected patients$: Observable<Array<PatientModel>> = this.store.pipe(select(PatientsSelectors.selectPatients));

  constructor(private store: Store) {
  }

  public ngOnInit() {
    this.patients$.subscribe((patients) => {this.patients = patients;});
  }

  addPatient() {
    this.store.dispatch(patientAdd({patient: {id: 3, name: this.patientName, age: this.patientAge, date: Date.now()}}));
  }

  deletePatient(id: number) {
    this.store.dispatch(patientDelete({patientId: id}));
  }

}
