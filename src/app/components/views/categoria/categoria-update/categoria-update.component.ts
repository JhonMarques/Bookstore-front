import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria-update',
  templateUrl: "./categoria-update.component.html",
  styleUrls: ["./categoria-update.component.css"],
  styles: [
  ]
})
export class CategoriaUpdateComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.router.navigate(['categorias'])
  }

}
