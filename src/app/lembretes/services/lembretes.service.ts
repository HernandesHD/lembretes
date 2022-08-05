import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Lembrete } from './../model/lembrete';
import { tap, first, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LembretesService {

  private readonly API = 'http://localhost:8090/api/lembretes';

  constructor(private httpClient: HttpClient) { }

  listaLembretes() {
    return this.httpClient.get<Lembrete[]>(this.API)
    .pipe(
      first(),
      delay(5000), //apenas para simular o carregamento com spinner
      tap(lembretes => console.log(lembretes))
    );
  }

  save(lembrete: Lembrete) {
    return this.httpClient.post<Lembrete>(this.API, lembrete);
  }

  edit(lembrete: Lembrete) {
    return this.httpClient.put<Lembrete>(this.API + '/edit/' + lembrete._id, lembrete);
  }

  delete(lembrete: Lembrete) {
    return this.httpClient.delete<Lembrete>(this.API + '/delete/' + lembrete._id);
  }

}
