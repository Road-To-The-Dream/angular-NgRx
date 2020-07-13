import {PatientModel} from "../../patient/patient.model";
import {PatientsUnion, PatientsActions} from "../actions/patients.action";

export interface PatientsState {
  patients: PatientModel[],
  showSpinner: boolean,
}

export const initialState: PatientsState = {
  patients: [],
  showSpinner: true,
};

export function patientsReducer(state: PatientsState = initialState, action: PatientsUnion) {
  switch (action.type) {
    case PatientsActions.LoadPatientsSuccess:
      return {
        ...state,
        patients: action.payload.patients,
      };
    case PatientsActions.LoadPatientsError:
      return {
        ...state,
        patients: [],
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
    case PatientsActions.ShowSpinner:
      return {
        ...state,
        showSpinner: true
      };
    case PatientsActions.HideSpinner:
      return {
        ...state,
        showSpinner: false
      };
    default:
      return state;
  }
}
