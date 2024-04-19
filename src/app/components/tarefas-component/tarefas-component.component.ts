import { Component } from '@angular/core';
import { TarefaService } from '../../services/tarefa-service.service';
import { Tarefa } from '../../interfaces/Tarefa';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-tarefa',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './tarefas-component.component.html',
  styleUrl: './tarefas-component.component.css'
})
export class TarefaComponent {
  tarefas: Tarefa[] = [];
  tarefaForm: FormGroup = new FormGroup([])

  constructor(private tarefaService: TarefaService, private formBuilder: FormBuilder) {
    this.tarefaForm = this.formBuilder.group({
      titulo: ['', Validators.required],
      descricao: [''],
      dataDeVencimento: [''],
      prioridade: ['']
    })
  }

  generateRandomString(): string {
    return Math.floor(1000 + Math.random() * 9000).toString();
  }

  inserir() {
    if (this.tarefaForm.valid) {
      const tarefaNova: Tarefa = {
        titulo: this.tarefaForm.value.titulo,
        descricao: this.tarefaForm.value.descricao,
        dataDeVencimento: this.tarefaForm.value.dataDeVencimento,
        prioridade: this.tarefaForm.value.prioridade,
        id: this.generateRandomString()
      }
      this.tarefaForm.reset()
      this.tarefaService.adicionar(tarefaNova)
      alert('Sua tarefa foi adicionada ao banco de dados!')
    }
  }

  listar(): void {
    this.tarefas = this.tarefaService.listar();
  }

  remover(id: string): void {
    this.tarefaService.remover(id)
    alert('Sua tarefa foi removida do banco de dados!')
  }

  ngOnInit(): void {
    this.listar();
  }

}
