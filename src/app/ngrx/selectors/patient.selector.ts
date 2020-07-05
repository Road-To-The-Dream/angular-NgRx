import {createFeatureSelector, createSelector} from '@ngrx/store';
import {PatientModel} from '../../patient/patient.model';

export const selectPatientsState = createFeatureSelector('patients');

export const selectPatientsLists = createSelector(selectPatientsState, (state: any) => state);

export const selectPatients = createSelector(
  selectPatientsLists,
  (state: PatientModel[]) => state
);
