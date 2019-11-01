import { Injectable } from '@angular/core';
import { ModeloBoletim } from '../model/boletim.model';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';
import { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } from 'constants';

const API_URL: string = "http://localhost:3000";

@Injectable({
  providedIn: 'root'
})
export class ServicoBoletim {

  cont: number;

  constructor(public http: HttpClient) {
  }
  
  getAll(): Promise<ModeloBoletim[]> {
    return this.http.get(`${API_URL}/boletim`).map(
      (itens: ModeloBoletim[]) => {
        return itens.map(
          (item: ModeloBoletim) => {
            return new ModeloBoletim(
              item.id,
              item.capa,
              item.titulo,
              item.publicadoEm,
              item.conteudo,
              item.likes,
              item.publicadorImagem,
              item.publicadorNome,
              item.publicadorId
            );
          }
        )  
      }
    ).toPromise();
  }

  pegarPeloId(id: number): Promise<ModeloBoletim> {
    console.log(this.http.get(`${API_URL}/boletim/${id}`), "oooooooooooooooooo");
    return this.http.get(`${API_URL}/boletim/${id}`).map(
      (item: ModeloBoletim) => {
        return new ModeloBoletim(
          item.id,
          item.capa,
          item.titulo,
          item.publicadoEm,
          item.conteudo,
          item.likes,
          item.publicadorImagem,
          item.publicadorNome,
          item.publicadorId
        );
      }
    ).toPromise();
  }

}
