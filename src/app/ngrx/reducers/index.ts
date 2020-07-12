import {ActionReducerMap} from '@ngrx/store';
import * as Patients from './patients.reducer';

class AppState {
  patientsComponent: Patients.State
}

export const baseReducers: ActionReducerMap<any> = {
  patientsComponent: Patients.patientsReducer
};
