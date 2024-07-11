import { Component, OnInit } from '@angular/core';
import { JobService } from '../job.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './job-list.component.html',
})
export class JobListComponent implements OnInit {
  jobs: any[] = [];

  constructor(private jobService: JobService) {}

  ngOnInit() {
    this.loadJobs();
  }

  loadJobs() {
    this.jobService.getJobs().subscribe(
      (response: any[]) => {
        console.log('Jobs loaded', response);
        this.jobs = response;
      },
      error => {
        console.error('Error loading jobs', error);
      }
    );
  }

  apply(jobId: number) {
    this.jobService.applyForJob(jobId).subscribe(
      () => {
        alert('Application submitted!');
      },
      error => {
        console.error('Error applying for job', error);
      }
    );
  }
}
