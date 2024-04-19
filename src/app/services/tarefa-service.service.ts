import { Injectable } from '@angular/core';
import { Tarefa } from '../interfaces/Tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }

  listTarefas: Tarefa[] = [
    { id: "181723", titulo: "Desenvolver a API", descricao: "Utilizar Java com Spring Boot", dataDeVencimento: "12/06/2024", prioridade: "Alta"},
    { id: "281276", titulo: "Desenvolver a interface em Angular", descricao: "Utilizar o Angular mais recente", dataDeVencimento: "30/6/2024" , prioridade: "Alta"},
    { id: "18275", titulo: "Subir no Git", descricao: "Commit na main", dataDeVencimento: "30/8/2024" , prioridade: "Baixa"},
  ]

  listar(): Tarefa[] {
    return this.listTarefas;
  }

  remover(id: string) {
    const tarefa = this.listTarefas.find(v => v.id == id);

    if (tarefa) {
      const i = this.listTarefas.indexOf(tarefa);
      this.listTarefas.splice(i, 1);
    }

  }

  adicionar(tarefa: Tarefa) {
    this.listTarefas.push(tarefa);
  }

}

