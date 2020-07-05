import {createAction, props} from '@ngrx/store';
import {PatientModel} from '../../patient/patient.model';

export const patientAdd = createAction(
  '[Patient] add',
  props<{patient: PatientModel}>()
);

export const patientDelete = createAction(
  '[Patient] delete',
  props<{patientId: number}>()
);
