import { Injectable } from '@angular/core';
import { Data } from '../../utils/job';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  jobs_url: string = 'https://remotive.io/api/remote-jobs';
  jobs_limit: number = 40;

  constructor(private http: HttpClient) { }

  getJobListings(): Observable<Data> {
    return this.http.get<Data>(`${this.jobs_url}?limit=${this.jobs_limit}`, { observe: 'body', responseType: 'json'});
  }
}
