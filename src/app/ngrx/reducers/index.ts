import {ActionReducerMap} from '@ngrx/store';
import {PatientModel} from '../../patient/patient.model';
import {patientReducer} from './patients.reducer';

class AppState {
  patients: PatientModel[];
}

export const baseReducer: ActionReducerMap<AppState> = {
  patients: patientReducer,
};
