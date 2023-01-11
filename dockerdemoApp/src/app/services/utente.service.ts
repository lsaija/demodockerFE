import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Utente } from '../models/utente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtenteService {

  private apiServer = 'http://localhost:8080/api/utente';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  getUtenti(): Observable<Utente[]> {
    return this.http.get<Utente[]>(`${this.apiServer}/`)
  }

  getUtente(id: number): Observable<Utente> {
    const url = `${this.apiServer}/${id}`;
    return this.http.get<Utente>(url)
   
  }
}
