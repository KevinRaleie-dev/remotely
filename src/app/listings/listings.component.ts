import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Job, Data } from 'src/utils/job';
import { JobService } from '../services/job.service';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {

  jobs: Job[] = [];
  loading: boolean = true;
  total_jobs: number = 0;

  constructor(private jobService: JobService) { }

  ngOnInit(): void {
    this.getJobs();
  }

  getJobs(): Subscription {
    return this.jobService.getJobListings().subscribe((data: Data) => {
      this.jobs = data.jobs
      this.total_jobs = this.jobs.length;
      this.loading = false;
    });
  }

  parseDate(date: string): string {
    const time = new Date(date).getDate();
    const date2 = new Date().getDate();
    const days = date2 - time;

    if (days === 0) {
      return `Today`     
    }
    return `${days}d`;
  }

  parseJobType(type: string): string {
    const t = type.split('_').join(' ');
    return t.charAt(0).toUpperCase() + t.slice(1);
  }

  parseJobDescription(desc: string): string {
    return desc.replace(/<[^>]*(>|$)|&nbsp;|&#34;|&#39;|&zwnj;|&raquo;|&laquo;|&gt;/g, '').slice(0, 100);
  }

}
