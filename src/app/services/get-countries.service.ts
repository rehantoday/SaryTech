import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetCountriesService {

  private apiURL = 'http://countryapi.gear.host/v1/Country/getCountries'; // 404 error | the api doesn't work, need to implement it locally
  constructor() {  }
}
