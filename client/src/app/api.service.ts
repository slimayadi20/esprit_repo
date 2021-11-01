import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  getCoursList() {
    return this.http.get(environment.api + '/cours')
  }

  getMatieresById(id: string) {
    return this.http.get(environment.api + '/matieres/' + id)
  }



  getCoursById(name: string) {
    return this.http.get(environment.api + '/cours/' + name)
  }

  public addNewMessage(message: any) {
    return this.http.post(environment.api + '/message/add', message);
  }
}
