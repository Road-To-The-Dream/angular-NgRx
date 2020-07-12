import {Action} from '@ngrx/store';
import {PatientModel} from '../../patient/patient.model';

export enum PatientsActions {
  GetPatients = '[Patient] Get',
  AddPatient = '[Patient] Add',
  DeletePatients = '[Patient] Delete',
}

export class GetPatient implements Action {
  readonly type = PatientsActions.GetPatients;
}

export class AddPatient implements Action {
  readonly type = PatientsActions.AddPatient;
  constructor(public payload: {patient: PatientModel}) {}
}

export class DeletePatient implements Action {
  readonly type = PatientsActions.DeletePatients;
  constructor(public payload: {id: number}) {}
}

export type PatientsUnion = GetPatient | AddPatient | DeletePatient
