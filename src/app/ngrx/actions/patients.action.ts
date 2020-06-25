import {Action} from "@ngrx/store";
import {PatientModel} from "../../patient/patient.model";

export enum PatientsActions {
  AddPatient = '[Patient] add',
}

export class AddPatient implements Action {
  readonly type = PatientsActions.AddPatient

  constructor(public payload: {patient: PatientModel}) {}
}

export type PatientsUnion = AddPatient;
