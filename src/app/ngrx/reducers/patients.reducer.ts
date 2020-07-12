import {PatientModel} from "../../patient/patient.model";
import {PatientsUnion, PatientsActions} from "../actions/patients.action";

export interface State {
  patients: PatientModel[],
  showSpinner: boolean,
}

export const initialState: State = {
  patients: [],
  showSpinner: false
};

export function patientsReducer(state: State = initialState, action: PatientsUnion) {
  switch (action.type) {
    case PatientsActions.GetPatients:
      return {
        ...state,
        patients: action,
      };
    case PatientsActions.AddPatient:
      return {
        ...state,
        patients: action.payload.patient
      };
    case PatientsActions.DeletePatients:
      return {
        ...state,
        patients: state.patients.filter(patient => patient.id !== action.payload.id)
      };
  }
}
