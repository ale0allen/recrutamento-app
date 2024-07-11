import { Component } from '@angular/core';
import { JobService } from '../job.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-job-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './job-form.component.html',
})
export class JobFormComponent {
  title: string = '';
  description: string = '';

  constructor(private jobService: JobService, private router: Router) {}

  onSubmit() {
    const job = { title: this.title, description: this.description };
    this.jobService.createJob(job).subscribe(
      () => {
        this.router.navigate(['/']);
      },
      error => {
        console.error('Job creation failed', error);
      }
    );
  }
}
