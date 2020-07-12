import {ActionReducerMap} from '@ngrx/store';
import * as Patients from './patients.reducer';
import {PatientsState} from "./patients.reducer";

export class AppState {
  patientsComponent: PatientsState
}

export const baseReducers: ActionReducerMap<any> = {
  patientsComponent: Patients.patientsReducer
};
