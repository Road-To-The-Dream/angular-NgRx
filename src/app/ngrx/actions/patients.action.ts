import {Action} from '@ngrx/store';
import {PatientModel} from '../../patient/patient.model';

export enum PatientsActions {
  LoadPatients = '[Patient] Load',
  LoadPatientsSuccess = '[Patient] Load success',
  LoadPatientsError = '[Patient] Load error',
  AddPatient = '[Patient] Add',
  DeletePatients = '[Patient] Delete',
  ShowSpinner = '[Patient] Show spinner',
  HideSpinner = '[Patient] Hide spinner',
}

export class LoadPatients implements Action {
  readonly type = PatientsActions.LoadPatients;
}

export class LoadPatientsSuccess implements Action {
  readonly type = PatientsActions.LoadPatientsSuccess;
  constructor(public payload: {patients: PatientModel[]}) {}
}

export class LoadPatientsError implements Action {
  readonly type = PatientsActions.LoadPatientsError;
}

export class AddPatient implements Action {
  readonly type = PatientsActions.AddPatient;
  constructor(public payload: {patient: PatientModel}) {}
}

export class DeletePatient implements Action {
  readonly type = PatientsActions.DeletePatients;
  constructor(public payload: {id: number}) {}
}

export class ShowSpinner implements Action {
  readonly type = PatientsActions.ShowSpinner;
}

export class HideSpinner implements Action {
  readonly type = PatientsActions.HideSpinner;
}

export type PatientsUnion =
  | LoadPatients
  | LoadPatientsSuccess
  | LoadPatientsError
  | AddPatient
  | DeletePatient
  | ShowSpinner
  | HideSpinner
