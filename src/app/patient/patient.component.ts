import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {PatientModel} from './patient.model';
import {Observable} from "rxjs";
import {selectPatientsList, selectPatientsSpinner} from "../ngrx/selectors/patient.selector";
import {LoadPatients} from "../ngrx/actions/patients.action";

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  public patients: PatientModel[] = [];
  public showSpinner = true;
  public patientName = '';
  public patientAge = 1;
  protected patients$: Observable<Array<PatientModel>> = this.store.pipe(select(selectPatientsList));
  protected showSpinner$: Observable<any> = this.store.pipe(select(selectPatientsSpinner));

  constructor(private store: Store) {
    this.store.dispatch(new LoadPatients());
  }

  public ngOnInit() {
    this.patients$.subscribe((patients: PatientModel[]) => this.patients = [...patients]);
    this.showSpinner$.subscribe((property: boolean) => this.showSpinner = property);
  }

  addPatient() {
    // this.store.dispatch(patientAdd({patient: {id: 3, name: this.patientName, age: this.patientAge, date: Date.now()}}));
  }

  deletePatient(id: number) {
    // this.store.dispatch(patientDelete({patientId: id}));
  }

}
