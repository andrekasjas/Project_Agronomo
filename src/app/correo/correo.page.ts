import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NavigationExtras, Router } from '@angular/router';
import { UsersService } from '../services/api.service'
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-correo',
  templateUrl: './correo.page.html',
  styleUrls: ['./correo.page.scss'],
})
export class CorreoPage {

  public migrupo1: FormGroup;
  cliente :any;
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(private usersService:UsersService, private authSvc: AuthService, private router: Router) {
    this.migrupo1 = this.crearMiFormulario();
  }

  async onLogin(email, password) {
    try {
      const user = await this.authSvc.mibellologin(email, password);
      if (user) {
        let admin = {
          adm_id : user.uid,
          adm_ema : user.email
        }
        this.usersService.agregar('administrador',admin).subscribe(res =>console.log(res));    
        const isVerified = this.authSvc.isEmailVerified(user);
        this.redirectUser(isVerified);
        console.log('Usuario ->', user);
      }
    } catch (error) {
      console.log('error ->', error);
    }
  }

  private redirectUser(isVerified: boolean): void {
    if (isVerified) {
      this.router.navigate(['tabs']);
    } else {
      this.router.navigate(['verify-email']);
    }
  }

  get email() { return this.migrupo1.get('email'); }
  get password() { return this.migrupo1.get('password'); }

  crearMiFormulario() {
    return new FormGroup({
      email: new FormControl('', [Validators.required, Validators.minLength(7), Validators.pattern(this.emailPattern)]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
     
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
      this.onLogin(objetoEnviar.state.infoCliente.email, objetoEnviar.state.infoCliente.password);
    }
  }

}
