import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, mergeMap, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {PatientService} from "../../services/patient.service";
import {PatientModel} from "../../patient/patient.model";
import {HideSpinner, LoadPatientsError, LoadPatientsSuccess, PatientsActions} from "../actions/patients.action";

@Injectable()
export class PatientsEffects {
  @Effect()
  loadPatients$ = this.actions$.pipe(
    ofType(PatientsActions.LoadPatients),
    mergeMap(() =>
      this.patientsService.getPatients().pipe(
        switchMap((patients: PatientModel[]) => of(new LoadPatientsSuccess({patients: patients}), new HideSpinner())),
        catchError(() => of(new LoadPatientsError(), new HideSpinner()))
      ))
  );

  constructor(
    private actions$: Actions,
    private patientsService: PatientService,
  ) {
  }
}
