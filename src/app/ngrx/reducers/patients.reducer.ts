import {createReducer, on} from '@ngrx/store';
import * as PatientActions from '../actions/patients.action';

export const initialState = [
  {
    id: 1,
    name: 'Ivan',
    age: 22,
    date: Date.now()
  },
  {
    id: 2,
    name: 'Andrey',
    age: 25,
    date: Date.now()
  }
];

export const patientReducer = createReducer(
  initialState,
  on(PatientActions.patientAdd, (state: any, {patient}) => ([...state, patient])),
  on(PatientActions.patientDelete, (state: any, {patientId}) => (state.filter(patient => patient.id !== patientId))),
);
