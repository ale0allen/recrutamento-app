import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobService } from '../job.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './job-details.component.html',
})
export class JobDetailsComponent implements OnInit {
  job: any;

  constructor(
    private route: ActivatedRoute,
    private jobService: JobService
  ) {}

  ngOnInit() {
    const jobId = this.route.snapshot.paramMap.get('id');
    if (jobId) {
      this.loadJobDetails(+jobId);
    }
  }

  loadJobDetails(jobId: number) {
    this.jobService.getJobDetails(jobId).subscribe(
      (response) => {
        this.job = response;
      },
      (error) => {
        console.error('Error loading job details', error);
      }
    );
  }

  applyForJob(jobId: number) {
    this.jobService.applyForJob(jobId).subscribe(
      () => {
        alert('Application submitted!');
      },
      (error) => {
        console.error('Error applying for job', error);
      }
    );
  }
}
