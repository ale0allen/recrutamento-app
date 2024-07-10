import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private baseUrl = 'http://localhost:8080/api/jobs';

  constructor(private http: HttpClient) {}

  getJobs(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  getJobDetails(jobId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${jobId}`);
  }

  applyForJob(jobId: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/apply`, { jobId });
  }

  createJob(job: any): Observable<any> {
    return this.http.post(this.baseUrl, job);
  }
}
