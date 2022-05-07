import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Icultivo, Ioperacion } from 'src/app/services/api.interfaces';
import { UsersService } from 'src/app/services/api.service';

@Component({
  selector: 'app-addoperacion',
  templateUrl: './addoperacion.page.html',
  styleUrls: ['./addoperacion.page.scss'],
})
export class AddoperacionPage implements OnInit {

  cultivos: any;
  public migrupo1: FormGroup;
  cliente :any;
  public id : string; 

  constructor(private alertController: AlertController, private activatedRoute:ActivatedRoute, private usersService: UsersService, private router: Router) {
    this.migrupo1 = this.crearMiFormulario();
    this.id = this.activatedRoute.snapshot.params.idcultivo;
   }


  ngOnInit() {
    {
      this.usersService.getUsers('cultivo',this.id).forEach(res=>{
      this.cultivos=(<Icultivo>res);
    });
  }
  }

  addoperacion(nombre, tiempo, fecha, finalidad){
    let operacionesactu: any;
    let operacion = {
      ope_nom : nombre,
      ope_tie : tiempo,
      ope_fec : fecha,
      ope_fin : finalidad,
      ope_cul_id : this.id
    }
    this.usersService.agregar('operacion', operacion).subscribe(res =>console.log(res));
    setTimeout(() => {
      this.usersService.getUsers('operaciones',this.id).forEach(resf=>{
        operacionesactu=(<Ioperacion>resf);
          for(const tipoo of operacionesactu){
              if(tipoo.ope_nom == nombre){
                this.presentAlertConfirm(tipoo.ope_id);
              }
          }
        });
    }, 1500);
    
  }

  async presentAlertConfirm(ope_id) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Agregar encargado!',
      message: 'Desea agregar un encargado a la <strong>operacion</strong> creada?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            this.router.navigate(['/tabs/tabs/operacion', this.id]);
          }
        }, {
          text: 'Aceptar',
          handler: () => {
            this.router.navigate(['/tabs/tabs/addencargados', ope_id]);
          }
        }
      ]
    });

    await alert.present();
  }
  get nombre() { return this.migrupo1.get('nombre'); }
  get tiempo() { return this.migrupo1.get('tiempo');}
  get fecha() { return this.migrupo1.get('fecha'); }
  get finalidad() { return this.migrupo1.get('finalidad'); }

  crearMiFormulario() {
    return new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(5)]),
      tiempo: new FormControl('', [Validators.required]),
      fecha: new FormControl('', [Validators.required]),
      finalidad: new FormControl('', [Validators.required, Validators.minLength(5)])
    });
  }

  onResetForm(): void {
    this.migrupo1.reset();
  }  
  salvarFormulario(): void {
    this.cliente=this.migrupo1.value
    if (this.migrupo1.valid) {

      let objetoEnviar: NavigationExtras = {
        state: {
          infoCliente: this.cliente
        }
      };
      const envia = objetoEnviar.state.infoCliente
      this.addoperacion(envia.nombre, envia.tiempo, envia.fecha, envia.finalidad);
    }
  }

}
