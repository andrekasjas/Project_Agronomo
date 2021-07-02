import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Ifinca } from 'src/app/services/api.interfaces';
import { UsersService } from 'src/app/services/api.service';

@Component({
  selector: 'app-addlote',
  templateUrl: './addlote.page.html',
  styleUrls: ['./addlote.page.scss'],
})
export class AddlotePage implements OnInit {
  fincas: any;
  public migrupo1: FormGroup;
  cliente :any;
  public id : string; 

  constructor(private activatedRoute: ActivatedRoute, private usersService: UsersService, private router: Router ) {
    this.migrupo1 = this.crearMiFormulario();
    this.id = this.activatedRoute.snapshot.params.idfinca;
   }

  ngOnInit() {
    {
      this.usersService.getUsers('finca',this.id).forEach(res=>{
      this.fincas=(<Ifinca>res);
    });
  }
  }

  addlote(nombre,area,descripcion){
    let lote = {
      lot_nom : nombre.value,
      lot_are : area.value,
      lot_des : descripcion.value,
      lot_fin_id : this.id
    }
    this.usersService.agregar('lote',lote).subscribe(res =>console.log(res));
    this.router.navigate(['/tabs/tabs/lote', this.id]);
  }

  get nombre() { return this.migrupo1.get('nombre'); }
  get area() { return this.migrupo1.get('area'); }
  get descripcion() { return this.migrupo1.get('descripcion'); }

  crearMiFormulario() {
    return new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(5)]),
      area: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required]),
    });
  }

  onResetForm(): void {
    this.migrupo1.reset();
  }

}
