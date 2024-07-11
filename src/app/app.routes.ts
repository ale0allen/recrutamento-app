import { Routes } from '@angular/router';
import { JobListComponent } from './job-list/job-list.component';
import { JobFormComponent } from './job-form/job-form.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/jobs', pathMatch: 'full' },
  { path: 'jobs', component: JobListComponent, canActivate: [AuthGuard] },
  { path: 'job-form', component: JobFormComponent, canActivate: [AuthGuard] },
  { path: 'job-details/:id', component: JobDetailsComponent, canActivate: [AuthGuard] },
  { path: 'create-job', component: JobFormComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent }
];