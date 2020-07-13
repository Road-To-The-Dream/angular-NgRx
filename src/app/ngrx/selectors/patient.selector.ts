import {createFeatureSelector, createSelector} from '@ngrx/store';

const selectPatients = createFeatureSelector('patientsComponent');

export const selectPatientsList = createSelector(
  selectPatients,
  (state: any) => state.patients
)

export const selectPatientsSpinner = createSelector(
  selectPatients,
  (state: any) => state.showSpinner
)
