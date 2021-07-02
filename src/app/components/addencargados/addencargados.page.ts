import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Ioperacion, Itrabajador } from 'src/app/services/api.interfaces';
import { UsersService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-addencargados',
  templateUrl: './addencargados.page.html',
  styleUrls: ['./addencargados.page.scss'],
})
export class AddencargadosPage implements OnInit {

  operaciones: any;
  trabajadores: any;
  public migrupo1: FormGroup;
  cliente :any;
  public id: string;
  public idadm: string;
  otro = {
    tra_nom: "otro"
  };
  
  constructor(private router:Router, private authService:AuthService, private usersService:UsersService, private activatedRoute: ActivatedRoute) { 
    this.migrupo1 = this.crearMiFormulario();
    this.id = this.activatedRoute.snapshot.params.idoperacion;
  }
  user = this.authService.user$;

  ngOnInit() {
    {
      this.usersService.getUsers('operacion',this.id).forEach(res=>{
      this.operaciones=(<Ioperacion>res);
    });
    this.authService.user$.subscribe(req =>{
      this.idadm=req.uid; 
      this.usersService.getUsers('trabajadores',this.idadm).forEach(res=>{
      this.trabajadores=(<Itrabajador>res)
    })});
  }
  }

  addencargado(cedula, valor){
    let traxope = {
      oxt_id : this.id,
      txo_ced : cedula.value ? cedula.value : cedula,
      txo_val : valor.value
    }
     
    console.log(traxope);
    
    this.usersService.agregar('traxope', traxope).subscribe(res =>console.log(res));
    this.router.navigate(['/tabs/tabs/trabajador', this.id]);
  }

  addtrabajador(cedula, nombre, telefono, valor){
     let trabajador = {
       tra_ced : cedula.value,
       tra_nom : nombre.value,
       tra_tel : telefono.value,
       tra_adm_id: this.idadm
     }
     for(const trabajador of this.trabajadores){
       const name = trabajador.tra_ced;
       if(name == cedula.value){
         return this.addencargado(trabajador.tra_ced, valor);
       }
     }

     this.usersService.agregar('trabajador', trabajador).subscribe(res =>console.log(res));
     setTimeout(() => {
      return this.addencargado(cedula, valor);
      }, 1500);
     
  }

  get cedula() { return this.migrupo1.get('cedula');}
  get nombre() { return this.migrupo1.get('nombre'); }
  get telefono() { return this.migrupo1.get('telefono'); }
  get pago() { return this.migrupo1.get('pago'); }

  crearMiFormulario() {
    return new FormGroup({
      cedula: new FormControl('', [Validators.required]),
      nombre: new FormControl('', [Validators.required]),
      telefono: new FormControl('', [Validators.required]),
      pago: new FormControl('', [Validators.required]),
    });
  }
  onResetForm(): void {
    this.migrupo1.reset();
  } 

}
