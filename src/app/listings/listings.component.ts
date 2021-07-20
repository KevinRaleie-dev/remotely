import { Component, OnInit } from '@angular/core';
import { Job } from 'src/utils/job';
import { JobService } from '../services/job.service';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {

  jobs: any = [];

  constructor(private jobService: JobService) { }

  ngOnInit(): void {
    this.jobService.getJobListings().subscribe((data: any) => {
      const {jobs} = data;
      this.jobs = jobs;
      console.log(this.jobs);
    });
  }

  parseDate(date: string): string {
    const t = new Date(date).getDate();
    const d = new Date().getDate();
    console.log(d);
    const days = d - t;

    if (days === 0) {
      return `Today`     
    }
    else if (days === 1) {
      return `${days} day ago`;
    }

    return `${days} days ago`;
  }

}
