import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/api.service'
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addfinca',
  templateUrl: './addfinca.page.html',
  styleUrls: ['./addfinca.page.scss'],
})
export class AddfincaPage implements OnInit {

  public migrupo1: FormGroup;
  cliente :any;
  public id : string;

  constructor(private router:Router, private usersService: UsersService, private activatedRoute:ActivatedRoute) { 
    this.migrupo1 = this.crearMiFormulario();
    this.id = this.activatedRoute.snapshot.params.idadministrador;
  }

  ngOnInit() {}

  addfinca(nombre,area,descripcion){
    let finca = {
      fin_nom : nombre.value,
      fin_are : area.value,
      fin_des : descripcion.value,
      fin_adm_id : this.id
    }
    this.usersService.agregar('finca',finca).subscribe(res =>console.log(res));
    this.router.navigate(['/tabs/tabs/finca']);
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
