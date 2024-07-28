import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interfaces';

@Injectable({ providedIn: 'root' })
export class GifsService {
  // Propiedades
  private apiKey: string = 'v7hS7IWD9HbodM5fdvhbPams3MGrQjC2';
  private url: string = 'https://api.giphy.com/v1/gifs';
  private _history: string[] = []; // Arreglo de Gifs
  public result: Gif[] = []; // Respuesta de la Api

  //Getters y Setters
  get history() {
    return [...this._history];
  }

  //Constructor
  constructor(private http: HttpClient) {
    this._history = JSON.parse(localStorage.getItem('history')!) || [];
    this.result = JSON.parse(localStorage.getItem('result')!) || [];
  }

  // Métodos
  setGifs(gif: string) {
    if (this._history.includes(gif)) {
      alert('Ya existe en el historial');
    } else {
      this.query(gif);
    }
  }

  query(gif: string) {
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('q', gif)
      .set('limit', '10');


    this.http // Petición Api Gifs
      .get<SearchGifsResponse>(`${this.url}/search`,{params})
      .subscribe((resp) => {
        if (resp.data.length !== 0) {
          if (this._history.includes(gif)) {
            this.showData(resp.data);
          } else {
            this._history.unshift(gif);
            this.showData(resp.data);
          }
        }
      });
  }
  private showData(resp: Gif[]) {
    this.result = resp;
    if (this._history.length === 10) this._history.pop();
    localStorage.setItem('history', JSON.stringify(this._history));
    localStorage.setItem('result', JSON.stringify(this.result));
  }
}
