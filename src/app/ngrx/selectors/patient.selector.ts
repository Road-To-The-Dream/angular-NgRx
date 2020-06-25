import {PatientModel} from "../../patient/patient.model";
import {createFeatureSelector, createSelector} from "@ngrx/store";

export interface State {
  patients: PatientModel[]
}

const selectPatients = (state: State) => state.patients;

export const selectPatientsList = createSelector(
  selectPatients,
  (state: State) => state.patients
)

// export interface State {
//   patients: PatientModel[]
// }
//
// const selectPatients = createFeatureSelector<State>('patients');
//
// export const selectPatientsList = createSelector(
//   selectPatients,
//   (state: State) => state.patients
// )
