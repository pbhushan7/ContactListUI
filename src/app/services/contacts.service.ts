import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { Contact } from '../models/Contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  GetAllContact(): Observable<Contact[]>{
    return this.http.get<Contact[]>(this.baseApiUrl + '/api/Contact/GetAllContact');
  }

  AddContact(addContactRequest:Contact): Observable<Contact>{
    return this.http.post<Contact>(this.baseApiUrl + '/api/Contact/SaveContact',addContactRequest);
  }


}
