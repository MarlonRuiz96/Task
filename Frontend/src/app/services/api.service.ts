import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:8080/demo';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<any> {
    return this.http.get(`${this.baseUrl}/task`);
  }

  getTask(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/task/${id}`);
  }

  createTask(task: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/task`, task);
  }

  updateTask(task: any) {
    return this.http.put<any>(`${this.baseUrl}/task/${task.id}`, task);
  }

  deleteTask(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/task/${id}`, { responseType: 'text' });
  }
}
