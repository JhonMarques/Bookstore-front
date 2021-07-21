import { CategoriaService } from './../categoria.service';
import { Categoria } from './../categoria.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria-update',
  templateUrl: './categoria-update.component.html',
  styleUrls: ['./categoria-update.component.css'],
  styles: [],
})
export class CategoriaUpdateComponent implements OnInit {
  categoria: Categoria = {
    id: '',
    nome: '',
    descricao: '',
  };

  constructor(
    private service: CategoriaService, 
    private router: Router, 
    private route: ActivatedRoute
    ) {}

  ngOnInit(): void {
    this.categoria.id = this.route.snapshot.paramMap.get('id')!;
    this.findById();
  }

  cancel(): void {
    this.router.navigate(['categorias']);
  }

  findById(): void {
    this.service.findById(this.categoria.id!).subscribe(resposta => {
      this.categoria.nome = resposta.nome;
      this.categoria.descricao = resposta.descricao;
    });
  }

  update(): void {
    this.service.update(this.categoria).subscribe((resposta) => {
      this.router.navigate(["categorias"]);
      this.service.mensagem("Categoria atualizada com sucesso");
    }, err => {
      this.service.mensagem('Validar se todos os campos estão preenchidos corretamente!')
    });
  }
  }
  

