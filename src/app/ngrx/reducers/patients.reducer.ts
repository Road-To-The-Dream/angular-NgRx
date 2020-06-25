import {PatientModel} from "../../patient/patient.model";
import {PatientsActions, PatientsUnion} from "../actions/patients.action";

export interface State {
  patients: PatientModel[],
}

export const initialState: State = {
  patients: [],
}

export function patientsReducer(state: State = initialState, action: PatientsUnion) {
  switch (action.type) {
    case PatientsActions.AddPatient:
      return {
        ...state,
        patient: action.payload.patient
      }
    default:
      return state
  }
}
