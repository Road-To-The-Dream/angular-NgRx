import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class PatientService {

  private API_URL = 'http://localhost:8000/api';

  constructor(
    private http: HttpClient
  ) {
  }

  public getPatients() {
    return this.http.get(this.API_URL + '/patients');
  }

}
