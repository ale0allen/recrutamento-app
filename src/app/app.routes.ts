// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { JobListComponent } from './job-list/job-list.component';
import { JobFormComponent } from './job-form/job-form.component';
import { LoginComponent } from './login/login.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'jobs', pathMatch: 'full' },
  { path: 'jobs', component: JobListComponent, canActivate: [AuthGuard] },
  { path: 'jobs/:id', component: JobDetailsComponent, canActivate: [AuthGuard] },
  { path: 'create-job', component: JobFormComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent }
];