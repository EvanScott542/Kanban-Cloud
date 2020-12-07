import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KanbanService {

    constructor(private httpClient: HttpClient) {}

    getCards() {
        return this.httpClient.get('http://127.0.0.1:8000/cards/');
    }

    addCard(data: any) {
      this.httpClient.post('http://127.0.0.1:8000/cards/', data);
    }

    updateCard(id: number, data) {
      this.httpClient.put(`http://127.0.0.1:8000/cards/${id}`, data)
    }
    
}