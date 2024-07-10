import { Component } from '@angular/core';
import { JobService } from '../job.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-job-form',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
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
        this.router.navigate(['/jobs']);
      },
      error => {
        console.error('Job creation failed', error);
      }
    );
  }
}
