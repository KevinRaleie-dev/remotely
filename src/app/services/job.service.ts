import { Injectable } from '@angular/core';
import { Job } from '../../utils/job';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  jobs_url: string = 'https://remotive.io/api/remote-jobs';

  constructor(private http: HttpClient) { }

  getJobListings(){
    return this.http.get(`${this.jobs_url}?limit=20`, { observe: 'body', responseType: 'json'});
  }
}
